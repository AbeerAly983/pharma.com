<?php

namespace App\Http\Controllers\Api;


use Illuminate\Support\Facades\Validator;

trait ApiValidation
{

    public function CheckEmailVerifyValidation($data){
        $validate=Validator::make($data, [
            'email' =>'required ',
            'otp' => 'required'
        ]);
        return $validate;}

    public function CheckFeedbackValidation($data){
        $validate=Validator::make($data, [
            'contents' => 'required',
        ]);
        return $validate;
    }

    public function ChecklLoginValidation($data){
        $validate=Validator::make($data, [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        return $validate;
    }
    public function ChecklRegisterValidation($data){
        $validate=Validator::make($data, [
            'first_name' => 'required|string|between:2,100',
            'last_name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);
        return $validate;
    }

    public function Check_Update_Profile_Validation($data){
        $validate=Validator::make($data, [
            'first_name' => 'required|string|between:2,100',
            'last_name' => 'required|string|between:2,100',


        ]);
        return $validate;
    }

    public function Check_Change_Password_Validation($data){
        $validate=Validator::make($data, [
            'old_password' => 'required',
            'new_password' => 'required|string|confirmed|min:6',
        ]);
        return $validate;
    }
}

