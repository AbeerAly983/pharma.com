<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Api\ApiValidation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ChangePasswordConroller
{
    use ApiValidation;
    public function change_password(Request $request,$id){

        $validator =$this->Check_Change_Password_Validation($request->all());
        if($validator->fails()){
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        else{
            $user=User::find($id);
            if($request->old_password==$request->new_password){
                return response()->json(['message' => "There aren't any change in password"]);
            }elseif (Hash::check($request->old_password,$user->password)) {
                $user->password=bcrypt($request->new_password);
                $user->save();
                return response()->json(['message' => "Password Updated"]);


            }else{
                return response()->json(['message' => "Password not correct"]);
            }

        }

    }

}
