<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Type;
use App\Models\discount;
use App\Models\Product;
use App\Http\Controllers\Api\ProductValidation;
use App\Traites\UploadImageTrait;

class TypeController extends Controller
{
    use UploadImageTrait;
    use ProductValidation;
    public function index(){
        $types = Type::get();
        return response($types);
    }

    public function show_products_by_type($id){
        $products_type = Type::find($id)->product;
        $data=array();

        foreach ($products_type as $item) {
            $products=Product::with('discount')->where('id',$item->id)->where('quantity', '>',0)->where('disable', 0)->first();
            if(!empty($products)){
                array_push($data,$products);}
        }

        if(!empty($data)){
            return response($data);
        }
        return response(['mess'=>'no products']);
    }

    public function store(Request $request){
        $validators = $this->type_validation($request->all());
        if($validators->fails()){
            return response()->json(['message'=> $validators->getMessageBag()->first()]);
        }
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'Types',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }
        Type::create($all);
        return response(['success'=>true]);
    }

    public function edit($id){
        $type = Type::where('id', $id)->first();
        return response()->json($type);
    }

    public function update(Request $request, $id){
        $request->validate(['type' => 'required']);
        $type = Type::where('id', $id)->first();
        if($type->type != $request->type){
            $validators = $this->Update_type_validation($request->all());
            if($validators->fails()){
                return response()->json(['message'=> $validators->getMessageBag()->first()]);
            }
        }
        $keys=array_keys( $request->all());
        $all=[];
        foreach($keys as $key){
            if ($key=='photo'){
                $path= $this->UploadImage($request,'Types',$key);
                $all[$key] = $path;
            }
            else{
                $all[$key] =$request->$key;
            }
        }
        $type->update($all);
        return response(['message'=>'type updated']);
    }
}
