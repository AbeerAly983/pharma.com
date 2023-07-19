<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

trait adminValidation
{
    public function ChecklRegisterValidation($data){
        $validate=Validator::make($data, [
            'first_name' => 'required|string|between:2,100',
            'last_name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:admins',
            'password' => 'required|string|confirmed|min:6',
        ]);
        return $validate;
    }
}
