<?php

namespace App\Http\Controllers\Order_cordinator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\orderCordinator;
use App\Notifications\forgetPasswordNotification;

class ForgotPasswordController extends Controller
{
    public function forgot_password(Request $request){
        $email = $request->validate(['email'=>'required|email|exists:order_cordinators']);
        $email = orderCordinator::where('email' ,$request->email)->first();
        $email->notify(new forgetPasswordNotification());
        return response(['sucess'=>true],200);
    }
}
