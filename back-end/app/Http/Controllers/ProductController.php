<?php

namespace App\Http\Controllers;


use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\discount;
use App\Http\Controllers\Api\ProductValidation;
use App\Traites\UploadImageTrait;

class ProductController extends Controller
{
    use ProductValidation;
    use UploadImageTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $arr = [];
        $products = Product::with('type')->with('discount')->get()->where('quantity', '>',0)->where('disable', 0);
        $data=array();
        foreach($products as $product){
            array_push($data,$product);
           }

        return  response ($data);

    }

    public function show_all_products(){
        $products = Product::with('type')->with('discount')->get();
        return response($products);
    }

    public function newProducts()
    {
        $products = Product::with('type')->with('discount')->latest()->take(10)->get()->where('quantity', '>',0)->where('disable', 0);
        $data=array();
        foreach($products as $product){
            array_push($data,$product);
           }
           return  response ($data);
    }

    public function search_for_products(Request $request){
        $content = '%'.$request->content .'%';
        $products = Product::where('name', 'like', $content)->where('quantity', '>',0)->where('disable', false)->with('type')->with('discount')->get();
        if($products->isEmpty()){
            return response(['mess'=>'not found']);
        }
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $validate = $this->product_validation($request->all());
        if($validate->fails()){
            return response(['message'=>$validate->getMessageBag()->first()]);
        }
        $keys=array_keys( $request->all());
        $all=[];
        $photos=['photo','photo_1','photo_2','photo_3','photo_4'];
        foreach($keys as $key){
            if (in_array($key,$photos)){
                $path= $this->UploadImage($request,'Products',$key);
                $all[$key] = $path;
            }

            else{
                $all[$key] =$request->$key;
            }
        }
        Product::create($all);
        return response(['sucess'=>true, 202]);


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {

        $oneproduct = Product::with('type')->with('discount')->where('id',$id)->first();
        $data_image=array();
        $images=['photo','photo_1','photo_2','photo_3','photo_4'];
        foreach ($images as $image){
            array_push($data_image,$oneproduct->$image);
        }
        $allImages=array_filter($data_image);
        $discount=discount::where('product_id', $id)->first();
        $data=['id'=> $oneproduct->id,
            'name'=>$oneproduct->name,
            'typeOfProduct'=>$oneproduct->type->type,
            'currency'=>$oneproduct->currency,
            "photo"=> $allImages,
            'description'=>$oneproduct->description,
            'ingredients'=>$oneproduct->ingredients,
            'howToUSe'=>$oneproduct->howToUSe,
            'brandCountry'=>$oneproduct->brandCountry,
            'company_name'=>$oneproduct->company_name,
            'characteristics'=>$oneproduct->characteristics,
            'app_area'=>$oneproduct->app_area,
            'for_whom'=>$oneproduct->for_whom,
            'purpose'=>$oneproduct->purpose,];
        if($oneproduct->quantity>0){
            $data['in_stock']='In Stoke';
            if($discount){
                $data['price']=$oneproduct->price;
                $data['presentage_Discount']=$oneproduct->discount->presentage_Discount;
                $data['discount_price']=$oneproduct->discount->discount_price;
            }
            else{
                $data['price']=$oneproduct->price;
                $data['presentage_Discount']=null;
                $data['discount_price']=null;
            }
        }
        else{
            $data['price']=null;
            $data['presentage_Discount']=null;
            $data['discount_price']=null;
            $data['in_stock']='Not In Stoke';
        }

        return response($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product =Product::with('type')->where('id', $id)->first();
        return response($product);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $qrCode = Product::where('qrCode', $request->qrCode)->where('id', $id)->get();
        if(! $qrCode->isEmpty())
            $validate = $this->update_product_validation($request->all());
        else
            $validate = $this->product_validation($request->all());

        if($validate->fails()){
            return response(['message'=>$validate->getMessageBag()->first()]);
        }
        $keys=array_keys( $request->all());
        $all=[];
        $photos=['photo','photo_1','photo_2','photo_3','photo_4'];
        foreach($keys as $key){
            if ($key=='qrCode'){
                if($qrCode->isEmpty()){
                    $path= $request->$key;
                    $all[$key] = $path;
                }
            }

            elseif (in_array($key,$photos)){
                $path= $this->UploadImage($request,'Products',$key);
                $all[$key] = $path;
            }

            else{
                $all[$key] =$request->$key;
            }
        }
        Product::where('id', $id)->update($all);
        return response(['sucess'=>true, 202]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */


    public function disable($id)
    {
        $product = Product::where('id', $id)->first();

        if($product->disable == false){
            $product->disable = true;
            $product->save();
        }
        else{
            $product->disable = false;
            $product->save();
        }
        return response(['sucess'=>true]);
    }

    public function show_disable(){
        $products = Product::with('type')->with('discount')->get()->where('quantity', '>',0)->where('disable', 1);
        return response()->json($products);
    }
    public function reorder(){
        $products=Product::get(['id','quantity','reorder_point','name','photo']);
        $all=array();
        foreach ($products as $product){
            if($product->reorder_point>=$product->quantity){
                array_push($all,['id'=>$product->id,'name'=>$product->name,'quantity'=>$product->quantity,'photo'=>$product->photo]);
            }

        }
        return response([$all,['size'=>count($all)]]);
    }
    public function expire(){
        $products=Product::get(['id','quantity','reorder_point','name','photo','production_date','expiry_date']);
        $all=array();
        $today= Carbon::now();
        foreach ($products as $product){
            if(Carbon::parse($today)->addMonths(3)->gte(Carbon::parse($product->expiry_date))){
                array_push($all,['id'=>$product->id,'name'=>$product->name,'quantity'=>$product->quantity,'photo'=>$product->photo,'production_date'=>$product->production_date,'expiry_date'=>$product->expiry_date]);
            }
        }

        return response([$all,['size'=>count($all)]]);
    }
}
