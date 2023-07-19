<?php

namespace App\Http\Controllers\Accountant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Accountant;
use App\Notifications\forgetPasswordNotification;

class ForgotPasswordController extends Controller
{
    public function forgot_password(Request $request){
        $email = $request->validate(['email'=>'required|email|exists:accountants']);
        $email = Accountant::where('email' ,$request->email)->first();
        $email->notify(new forgetPasswordNotification());
        return response(['sucess'=>true],200);
    }
}
