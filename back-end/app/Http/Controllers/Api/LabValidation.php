<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

trait LabValidation
{
    public function CheckLabValidation($data){
        $validate=Validator::make($data, [
            'name' => 'required',
            'type_of_medical_analyses' => 'required',
            'appointment' => 'required',
            'city' => 'required',
            'residential_area' => 'required',
            'phone' => 'required',
            'street' => 'required',
            'photo' => 'required',
            'time'=>'required',
        ]);
        return $validate;
    }
    public function CheckUpdateLabValidation($data){
        $validate=Validator::make($data, [
            'name' => 'required',
            'type_of_medical_analyses' => 'required',
            'appointment' => 'required',
            'city' => 'required',
            'residential_area' => 'required',
            'phone' => 'required',
            'street' => 'required',
            'time'=>'required',

        ]);
        return $validate;
    }

}
