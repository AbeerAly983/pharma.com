<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\forgetPasswordNotification;
use Illuminate\Http\Request;
use Otp;
use Illuminate\Support\Facades\DB;

class forgotPasswordController extends Controller
{
    public function forgot_password(Request $request){
        $email = $request->validate(['email'=>'required|email|exists:Users']);
        $email = User::where('email' ,$request->email)->first();
        DB::table('otps')->where('identifier', $request->email)->delete();
        $email->notify(new forgetPasswordNotification());
        return response(['sucess'=>true],200);
    }
}
