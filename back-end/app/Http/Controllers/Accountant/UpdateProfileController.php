<?php

namespace App\Http\Controllers\Accountant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiValidation;
use App\Models\Accountant;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Notifications\emailVerificationNotification;
use Illuminate\Support\Facades\Hash;
use App\Traites\UploadImageTrait;
use App\Models\Employee_oldEmails;
use Otp;
use Illuminate\Support\Facades\DB;

class UpdateProfileController extends Controller
{
    use UploadImageTrait;
    public function __construct(){
        $this->otp = new Otp;
    }
    public function edit_userName(){
        $orderCordinator = Accountant::where('id', Auth()->user()->id)->first();
        return response(['first_name' => $orderCordinator->first_name,
                        'last_name'=>$orderCordinator->last_name,
                        'phone' => $orderCordinator->phone,
                        'photo' => $orderCordinator->photo
                        ]);
    }

    public function update_userName(Request $request){
        $request->validate([
            'first_name' => 'required| string',
            'last_name' => 'required| string'
        ]);
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'Accountants',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }
        $orderCordinator = Accountant::where('id', Auth()->user()->id)->update($all);
        return response(['message' => 'updated']);
    }

    public function update_password(Request $request){
        $request->validate([
            'oldPassword' => 'required',
            'password' => 'required|confirmed'
        ]);
        $orderCordinator = Accountant::where('id', Auth()->user()->id)->first();
        if(Hash::check($request->oldPassword, $orderCordinator->password)){
            $request->password = Hash::make($request->password);
            $orderCordinator->update(['password' => $request->password]);
            return response(['message' => 'password updated']);
        }
        else
            return response(['error' => 'password isn\'t correct']);
    }

    public function edit_email(){
        $admin = Accountant::where('id', auth()->guard('accountant')->user()->id)->first();
        return response(['email'=>$admin->email]);
    }

    public function update_email(Request $request){
        $request->validate(['email' => 'required | unique:accountants']);
        $admin = Accountant::where('id', auth()->guard('accountant')->user()->id)->first();
        Employee_oldEmails::where('email',$request->email)->delete();
         Employee_oldEmails::create([
            'accountant_id' => $admin->id,
            'email' => $request->email,
        ]);
        $accountants = Employee_oldEmails::where('email',$request->email)->get();
        DB::table('otps')->where('identifier', $request->email)->delete();
        foreach($accountants as $accountant1){
            $accountant1->notify(new emailVerificationNotification());
        }
    }

    public function new_email_verification(Request $request){
        $data = $request->validate([
            'email' =>'required',
            'otp' => 'required'
        ]);
        $Id = auth()->guard('accountant')->user()->id;
        $otp2 = $this->otp->validate($request->email, $request->otp);
        if(!$otp2->status){
            return response(['error'=>"no"]);
        }

        $admins = Accountant::find($Id);
        $admins->email = $request->email;
        $admins->email_verified_at = now();
        $admins->save();
        $admin = Employee_oldEmails::where('email',$request->email)->delete();
        return response(['sucess'=>true]);
    }


}
