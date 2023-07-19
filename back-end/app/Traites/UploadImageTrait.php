<?php

namespace App\Traites;

use Illuminate\Http\Request;

trait UploadImageTrait
{
    public function UploadImage(Request $request,$foldername,$FileName){
        $image=$request->file($FileName)->getClientOriginalName();
        $path=$request->file($FileName)->storeAs($foldername,$image,'path');
        $path2=$request->file($FileName)->storeAs($foldername,$image,'path1');
        $path3=$request->file($FileName)->storeAs($foldername,$image,'path2');
        $path4=$request->file($FileName)->storeAs($foldername,$image,'path3');
        $path5=$request->file($FileName)->storeAs($foldername,$image,'path4');
        return $path;
    }
}
