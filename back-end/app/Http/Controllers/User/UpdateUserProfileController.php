<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Api\ApiValidation;
use App\Models\User;
use App\Traites\UploadImageTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UpdateUserProfileController
{
    use ApiValidation;
    use UploadImageTrait;
    public function edit()
    {
        $id = Auth::user()->id;
        $user=User::find($id);
        return $user;
    }

    public function update(Request $request)
    {
        $id = Auth::user()->id;
        $validation = $this->Check_Update_Profile_Validation($request->all());
        if($validation->fails()){
            return response()->json(['message' => $validation->getMessageBag()->first()]);
        }
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'Users',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }
        User::where('id', $id)->update($all);;


    }

}
