<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Api\NewsValidation;
use App\Models\news;
use Illuminate\Http\Request;
use App\Traites\UploadImageTrait;

class newsController extends Controller
{
    use NewsValidation;
    use UploadImageTrait;

    public function store(Request $request){
        $validation = $this->ChecklNewsValidation($request->all());
        if($validation->fails()){
            return response()->json(['message' => $validation->getMessageBag()->first()]);
        }
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'News',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }
        $news=news::create($all);
        if($news){
            return response()->json(['message' => 'Add Successfully']);
        }
        return response()->json(['message' => 'Failed to Add']);

    }
    public function index()
    {
        $news = news::all();
        return response($news);

    }
    public function show($id){
        $news=news::find($id);
        return $news;
    }

    public function edit($id){
        $news=news::where('id',$id)->first();
        return $news;
    }
    public function update(Request $request,$id){
        $validation = $this->ChecklUpdateNewsValidation($request->all());
        if($validation->fails()){
            return response()->json(['message' => $validation->getMessageBag()->first()]);
        }
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'News',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }
        $news=news::find($id);
        $news->update($all);
        if($news){
            return response()->json(['message' => 'Update Successfully']);
        }
        return response()->json(['message' => 'Failed to Update']);


    }
    public function delete($id){
        $news=news::destroy($id);
        if($news){
            return response()->json(['message' => 'Delete Successfully']);
        }
        return response()->json(['message' => 'Failed to Delete']);

    }

    public function showall()
    {
        $news = news::get();
        return response($news);

    }
}
