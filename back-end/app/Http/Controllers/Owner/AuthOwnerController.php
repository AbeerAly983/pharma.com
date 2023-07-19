<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ApiValidation;
use App\Models\Owner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Notifications\emailVerificationNotification;


class AuthOwnerController extends Controller
{

    use ApiValidation;
    public function __construct() {
        $this->middleware('auth:owner', ['except' => ['login']]);
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
        if (! $token = auth()->guard('owner')->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
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
        auth()->guard('owner')->logout();
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
            'expires_in' => auth()->factory()->getTTL() * 3000,
            'user' => auth()->user()
        ]);
    }
    public function edit()
    {
        $id = Auth::user()->id;
        $user=User::find($id);
        return $user;
    }

    public function update(Request $request)
    {
        $id = Auth::user()->id;
        $validation = $this->Check_Update_Profile_Validation($request->all());
        if($validation->fails()){
            return response($validation->errors());
        }
        $user=Owner::find($id);
        $array_name=array('first_name','last_name');
        foreach ($array_name as $element) {
           $user->$element=$request->$element;
           $user->save();
            

        }

    }
}
