<?php

namespace App\Http\Controllers\User;

use App\Models\oldEmails;
use App\Notifications\emailVerificationNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ChangeEmail
{
    public function changeEmail(Request $request){
        $data = $request->validate([
            'email' =>'required | unique:users',
        ]);
        $userId = Auth::user()->id;

        $user=oldEmails::create([
            'user_id' => $userId,
            'email' => $request->email,
            'email_verified_at' =>null,
        ]);
        $user->save();
        $users = oldEmails::where('email',$request->email)->get();
        DB::table('otps')->where('identifier', $request->email)->delete();
        foreach($users as $user){
            $user->notify(new emailVerificationNotification());
        }

    }

}
