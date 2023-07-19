<?php

namespace App\Http\Controllers\Order_cordinator;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ApiValidation;
use App\Models\orderCordinator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Notifications\emailVerificationNotification;


class AuthController extends Controller
{

    use ApiValidation;
    public function __construct() {
        $this->middleware('auth:orderCoordinator', ['except' => ['login']]);
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){
        $validator =$this->ChecklLoginValidation($request->all());
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if ($token = auth()->guard('orderCoordinator')->attempt($validator->validated())) {
            if(! $this->check_email_verification($request->email)){
                $admin = orderCordinator::where('email', $request->email)->first();
                $admin->notify(new emailVerificationNotification());
                return response(['message' => 'email not verified']);
            }
            else
                return $this->createNewToken($token);
        }

        $email = orderCordinator::where('email', $request->email)->get();
        if(! $email->isEmpty()){
            return response(['error' => 'password is wrong']);
        }
        else{
            return response(['error' => 'email is wrong']);
        }

    }

    private function check_email_verification($email){
        $user = orderCordinator::where('email', $email)->whereNull('email_verified_at')->get();
        if(!$user->isEmpty()){
            return false;
        }
        return true;
    }




    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->guard('orderCoordinator')->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
//    public function refresh() {
//        return $this->createNewToken(auth()->refresh());
//    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->guard('orderCoordinator')->user());
    }
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 3000,
            'user' => auth()->user()
        ]);
    }

}
