<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\orderCordinator;
use App\Http\Controllers\Api\orderCordinatorValidation;
use Illuminate\Support\Facades\Hash;

class OrderCordinatorController extends Controller
{
    use orderCordinatorValidation;

    public function add_orderCordinator(Request $request){
        $validator =$this->ChecklRegisterValidation($request->all());
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $password = ['password'=>Hash::make($request->password)];
        orderCordinator::create(array_merge($request->all(), $password));
        return response(['message'=> 'added new order coordinator']);
    }

    public function index(){
        $orderCordinators = orderCordinator::all();
        return response($orderCordinators);
    }

    public function disable($accountant_id){
        orderCordinator::where('id', $accountant_id)->update(['disable' => true]);
        return response(['success' => true]);
    }

    public function able($id){
        orderCordinator::where('id', $id)->update(['disable' => false]);
        return response(['success' => true]);
    }
}
