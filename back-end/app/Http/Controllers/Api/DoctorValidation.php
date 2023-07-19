<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

trait DoctorValidation
{
    public function CheckDoctorValidation($data){
        $validate=Validator::make($data, [
            'name' => 'required',
            'specialize' => 'required',
            'appointment' => 'required',
            'city' => 'required',
            'residential_area' => 'required',
            'phone' => 'required',
            'street' => 'required',
            'photo'=>'required',
            'time'=>'required',
        ]);
        return $validate;
    }
    public function CheckUpdateDoctorValidation($data){
        $validate=Validator::make($data, [
            'name' => 'required',
            'specialize' => 'required',
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
