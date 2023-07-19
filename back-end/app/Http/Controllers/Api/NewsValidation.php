<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

trait NewsValidation
{
    public function ChecklNewsValidation($data){
        $validate=Validator::make($data, [
            'title' => 'required|string',
            'photo' => 'required',
            'description' => 'required|string',

        ]);
        return $validate;
    }
    public function ChecklUpdateNewsValidation($data){
        $validate=Validator::make($data, [
            'title' => 'required|string',
            'description' => 'required|string',

        ]);
        return $validate;
    }

}
