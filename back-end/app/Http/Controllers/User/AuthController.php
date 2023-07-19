<?php

namespace App\Http\Controllers\User;


use App\Http\Controllers\Api\ApiValidation;
use App\Http\Controllers\Controller;
use App\Models\new_user;
use App\Models\oldEmails;
use App\Models\User;
use App\Notifications\emailVerificationNotification;
use App\Traites\UploadImageTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{

    use ApiValidation;
    use UploadImageTrait;
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){
        $validator =$this->ChecklLoginValidation($request->all());
        $check_email=User::where('email', 'like', '%' . $request->email . '%')->first();
        if ($validator->fails()) {
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        if($this->check_email_verification($request->email)){
            if (! $token = auth()->attempt($validator->validated())) {

                if($check_email){
                    return response()->json(['message' => 'Password Incorrect']);
                }
                else{
                    return response()->json(['message' => 'Email Incorrect']);}
            }


            return $this->createNewToken($token);
        }
        return response()->json(['message' => "This Email Don't Verified"]);
    }

    private function check_email_verification($email){
        $user = User::where('email', $email)->whereNull('email_verified_at')->get();
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
    public function register(Request $request) {
        $validator =$this->ChecklRegisterValidation($request->all());
        if($validator->fails()){
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        $user2 = new_user::where('email', $request->email)->delete();
        $hi=DB::table('otps')->where('identifier',$request->email)->delete();


        $user = new_user::create(array_merge(
            $validator->validated()
        ));

        $user->notify(new emailVerificationNotification());

        return response()->json(['message' => 'Account Created Sucessfully']);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'successfully signed out']);
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
        return response()->json(auth()->user());
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
            'expires_in' => auth()->factory()->getTTL() * 1880,
            'user' => auth()->user()
        ]);
    }
}
