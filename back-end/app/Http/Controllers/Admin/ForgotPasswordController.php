<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use App\Notifications\forgetPasswordNotification;

class ForgotPasswordController extends Controller
{
    public function forgot_password(Request $request){
        $email = $request->validate(['email'=>'required|email|exists:admins']);
        $email = admin::where('email' ,$request->email)->first();
        $email->notify(new forgetPasswordNotification());
        return response(['sucess'=>true],200);
    }
}
