<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Http\Controllers\Api\adminValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    use adminValidation;
    public function add_admin(Request $request){
        $validator =$this->ChecklRegisterValidation($request->all());
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $password = ['password'=>Hash::make($request->password)];
        Admin::create(array_merge($request->all(), $password));
        return response(['message'=> 'added new admin']);
    }

    public function index(){
        $admins = Admin::all();
        return response($admins);
    }

    public function disable($id){
        Admin::where('id', $id)->update(['disabled' => true]);
        return response(['success' => true]);
    }

    public function able($id){
        Admin::where('id', $id)->update(['disabled' => false]);
        return response(['success' => true]);
    }
}
