<?php

namespace App\Http\Controllers\Accountant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Accountant;
use Otp;

class emailVerificationController extends Controller
{
    private $otp;

    public function __construct(){
        $this->otp = new Otp;
    }
    public function verify_email(Request $request){
        $request->validate([
            'email' => 'required|exists:accountants',
            'otp' => 'required | numeric'
        ]);

        $otp2 = $this->otp->validate($request->email, $request->otp);

        if(! $otp2->status){
            return response(['error'=>'this code does not correct']);
        }

        $user = Accountant::where('email', $request->email)->update(['email_verified_at'=>now()]);
        return response(['success' => true]);



    }
}
