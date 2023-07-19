<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use Otp;

class AdminEmailVerificationController extends Controller
{
    private $otp;

    public function __construct(){
        $this->otp = new Otp;
    }
    public function verify_email(Request $request){
        $request->validate([
            'email' => 'required|exists:admins',
            'otp' => 'required | numeric'
        ]);

        $otp2 = $this->otp->validate($request->email, $request->otp);

        if(! $otp2->status){
            return response(['error'=>'this code does not correct']);
        }

        $user = Admin::where('email', $request->email)->update(['email_verified_at'=>now()]);
        return response(['success' => true]);



    }
}
