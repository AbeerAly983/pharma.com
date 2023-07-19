<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Api\LabValidation;
use App\Models\Labs;
use Illuminate\Http\Request;
use App\Traites\UploadImageTrait;

class LabController extends Controller
{

    use LabValidation;
    use UploadImageTrait;

    public function index(){
        $labs_data=Labs::get(['id','name','photo']);
        return response($labs_data);
    }
    public function store(Request $request)
    {
        $validator = $this->CheckLabValidation($request->all());


        if ($validator->fails()) {
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'Labs',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }

        $lab=Labs::create($all);
        if($lab){
            return response()->json(['message' => 'Add successfully']);
        }
        return response()->json(['message' => 'Failed to Add']);
    }



    public function show($id)
    {
        $lab_data = Labs::where('id',$id)->first();

        if($lab_data){
            return response($lab_data);
        }
        return response()->json(['message' => 'Lab Not Found']);


    }
    public function edit($id)
    {
        $lab_data = Labs::where('id',$id)->first();
        if($lab_data){
            return response($lab_data);
        }
        return response()->json(['message' => 'Lab Not Found']);


    }
    public  function update(Request $request,$id){
        $validation = $this->CheckUpdateLabValidation($request->all());
        if($validation->fails()){
            return response()->json(['message' => $validation->getMessageBag()->first()]);
        }
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'Labs',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }
        $lab=Labs::find($id);
        $lab->update($all);
        if($lab){
            return response()->json(['message' => 'Updated Successfully']);
        }
        return response()->json(['message' => 'Failed to Update']);


    }
    public function delete($id){
        $lab=Labs::destroy($id);
        if($lab){
            return response()->json(['message' => 'Deleted Successfully']);
        }
        return response()->json(['message' => 'Failed to Delete']);

    }

    public function showall(){
        $labs_data=Labs::get();
        return response($labs_data);
    }
}
