<?php

namespace App\Http\Controllers\Owner\profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Owner;
use Otp;

class resetPasswordController extends Controller
{
    private $otp;

    public function __construct(){
        $this->otp = new Otp;
    }

    public function reset_password(Request $request){
        $data = $request->validate([
            'email' => 'required|email|exists:owners',
            'otp' => 'required',
            'password' => 'required|confirmed'
        ]);


        $otp2 = $this->otp->validate($request->email, $request->otp);
        if(!$otp2->status){
            return response(['error'=>'this code does not correct']);
        }
        $user = Owner::where('email', $request->email)->first();
        $user->password = bcrypt($request->password);
        $user->save();
        return response(['sucess'=>true]);

    }
}
