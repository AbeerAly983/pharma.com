<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Api\ApiValidation;
use App\Http\Controllers\Controller;
use App\Models\new_user;
use App\Models\oldEmails;
use App\Models\User;
use App\Notifications\emailVerificationNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Otp;
use App\Models\wattingEmail;


class emailVerificationController extends Controller
{
    use ApiValidation;
    private $otp;

    public function __construct(){
        $this->otp = new Otp;
    }

    public function email_verification(Request $request){

        $validator = $this->CheckEmailVerifyValidation($request->all());
        if($validator->fails()){
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }

        $otp2 = $this->otp->validate($request->email, $request->otp);
        if(!$otp2->status){
            return response(['error'=>"no"]);
        }
        $user = new_user::where('email',$request->email)->first();
        $data=User::create([
            'first_name'=>$user->first_name,
            'last_name'=>$user->last_name,
            'email'=>$user->email,
            'password'=>bcrypt($user->password)


        ]);
        $data->email_verified_at = now();
        $data->save();

        if($data ){
            new_user::where('email', $request->email)->delete();
            return response('true');
        }
        else{
            return response('false');
        }
        $data->save();
       return response($time);

    }

    public function new_email_verification(Request $request){
        $data = $request->validate([
            'email' =>'required',
            'otp' => 'required'
        ]);
        $userId = Auth::user()->id;
        $otp2 = $this->otp->validate($request->email, $request->otp);
        if(!$otp2->status){
            return response(['error'=>"no"]);
        }
        $user = oldEmails::where('email',$request->email)->first();
        $user->email_verified_at = now();
        $user->save();
        $users = User::find($userId);
        $users->email = $request->email;
        $users->email_verified_at = now();
        $users->save();
        return response(['sucess'=>true]);

    }
    public function resesnd_email(Request $request){
        $data = $request->validate([
            'email' =>'required',
        ]);
        DB::table('otps')->where('identifier', $request->email)->delete();
        $user = wattingEmail::create([
            'email' => $request->email,
        ]);
        $user->notify(new emailVerificationNotification());
        wattingEmail::where('email', $request->email)->delete();

    }

}
