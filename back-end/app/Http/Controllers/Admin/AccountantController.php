<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Accountant;
use App\Http\Controllers\Api\accountantValidation;
use Illuminate\Support\Facades\Hash;


class AccountantController extends Controller
{
    use accountantValidation;
    public function add_accountant(Request $request){
        $validator =$this->ChecklRegisterValidation($request->all());
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $password = ['password'=>Hash::make($request->password)];
        Accountant::create(array_merge($request->all(), $password));
        return response(['message'=> 'added new accountant']);
    }

    public function index(){
        $accountants = Accountant::all();
        return response($accountants);
    }

    public function disable($id){
        Accountant::where('id', $id)->update(['disable' => true]);
        return response(['success' => true]);
    }

    public function able($accountant_id){
        Accountant::where('id', $accountant_id)->update(['disable' => false]);
        return response(['success' => true]);
    }
}
