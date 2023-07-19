<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;

trait ProductValidation
{
    public function product_validation($data){
        $validation = Validator::make($data, [
            'qrCode' =>'required | unique:products',
            'name' => 'required',
            'price' => 'required | numeric',
            'currency' => 'required',
            'photo' => 'required',
            'quantity' => 'required | numeric',
            'description'=>'required',
            'type_id' => 'required',
            'ingredients'=> 'required',
            'howToUSe' => 'required',
            'brandCountry'=> 'required',
            'purpose'=>'required',
            'for_whom'=>'required',
            'app_area'=>'required',
            'characteristics'=>'required',
            'company_name'=>'required',
            'reorder_point' => 'required | numeric',
            'production_date' =>'required | date',
            'expiry_date'=>'required | date'
        ]);
        return $validation;
    }
    public function update_product_validation($data){
        $validation = Validator::make($data, [
            'qrCode' =>'required',
            'name' => 'required',
            'price' => 'required | numeric',
            'currency' => 'required',
            'quantity' => 'required | numeric',
            'description'=>'required',
            'type_id' => 'required',
            'ingredients'=> 'required',
            'howToUSe' => 'required',
            'brandCountry'=> 'required',
            'purpose'=>'required',
            'for_whom'=>'required',
            'app_area'=>'required',
            'characteristics'=>'required',
            'company_name'=>'required',
            'reorder_point' => 'required | numeric',
            'production_date' =>'required | date',
            'expiry_date'=>'required | date'
        ]);
        return $validation;
    }


    public function discount_validation($data){
        $validation = Validator::make($data,[
            'product_id' => 'required|unique:discounts',
            'presentage_Discount' => 'required|numeric',
            'discount_price' => 'required|numeric'
        ]);
        return $validation;
    }
    public function update_discount_validation($data){
        $validation = Validator::make($data,[
            'product_id' => 'required|exists:discounts',
            'presentage_Discount' => 'required|numeric',
            'discount_price' => 'required|numeric'
        ]);
        return $validation;
    }
    public function type_validation($data){
        $validate = validator::make($data, [
            'type' => 'required | string| unique:types',
            'photo' => 'required',
        ]);
        return $validate;
    }
    public function Update_type_validation($data){
        $validate = validator::make($data, [
            'type' => 'required | string| unique:types',
        ]);
        return $validate;
    }
    public function product_caseValidation($date){
        $validations = Validator::make($date, [
            'ProductName' => 'required|string',
            'composition' => 'required',
            'pregnancy' => 'required',
            'lactation' => 'required',
        ]);
        return $validations;

    }

    public function product_indication_validation($data){
        $validate = Validator::make($data, [
            'indication'=>'required| string'
        ]);
        return $validate;
    }

    public function product_dose_validation($data){
        $validate = Validator::make($data, [
            'min_age' => 'integer|nullable',
            'max_age' => 'integer|nullable',
            'min_weight' => 'integer|nullable',
            'max_weight' => 'integer|nullable',
            'dose' => 'required | string ',
        ]);
        return $validate;
    }
}
