<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

trait SessionValidation
{
    public function CheckSessionValidation($data){
        $validate=Validator::make($data, [
            'url'=> 'required',
            'title'=> 'required',
            'description'=> 'required',
            'date'=> 'required',
            'time'=> 'required'
        ]);
        return $validate;
    }
    public function CheckUpdateSessionValidation($data){
        $validate=Validator::make($data, [
            'url'=> 'required',
            'title'=> 'required',
            'description'=> 'required',
            'time'=> 'required'
        ]);
        return $validate;
    }
    public function CheckCommentValidation($data){
        $validate=Validator::make($data, [
            'contant'=> 'required',
        ]);
        return $validate;
    }

}
