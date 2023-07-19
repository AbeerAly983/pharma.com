<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Api\DoctorValidation;
use App\Models\Doctors;
use Illuminate\Http\Request;
use App\Traites\UploadImageTrait;



class DoctorController extends Controller
{
    use DoctorValidation;
    use UploadImageTrait;

    public function index(){
        $doctor=Doctors::get(['id','photo','name','specialize']);
        return response($doctor);
    }
    public function store(Request $request)
    {
        $validator =$this->CheckDoctorValidation($request->all());
        if ($validator->fails()) {
            return response()->json(['message' => $validator->getMessageBag()->first()]);
        }
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'Doctors',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }
        $doctor=Doctors::create($all);
        if($doctor){
            return response()->json(['message' => 'Add successfully']);
        }
        return response()->json(['message' => 'Failed to Add']);
    }

    public function show($id)
    {
        $doctor = Doctors::where('id',$id)->first();

        if($doctor){
            return response($doctor);
        }
        return response()->json(['message' => 'Not Found']);


    }
    public function edit($id)
    {
        $doctor = Doctors::where('id',$id)->first();

        if($doctor){
            return response($doctor);
        }
        return response()->json(['message' => 'Not Found']);


    }
    public  function update(Request $request,$id){
        $validation = $this->CheckUpdateDoctorValidation($request->all());
        if($validation->fails()){
            return response()->json(['message' => $validation->getMessageBag()->first()]);
        }
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'Doctors',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }
        $doctor=Doctors::find($id);
        $doctor->update($all);
        if($doctor){
            return response()->json(['message' => 'Update Successfully']);
        }
        return response()->json(['message' => 'Failed to Update']);


    }
    public function delete($id){
        $doctor=Doctors::destroy($id);
        if($doctor){
            return response()->json(['message' => 'Delete Successfully']);
        }
        return response()->json(['message' => 'Failed to Delete']);

    }

    public function showall(){
        $doctor=Doctors::get();
        return response($doctor);
    }

}
