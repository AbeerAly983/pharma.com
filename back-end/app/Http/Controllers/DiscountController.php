<?php

namespace App\Http\Controllers;

use App\Models\discount;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ProductValidation;

class DiscountController extends Controller
{
    use ProductValidation;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = discount::with('product')->with('product.type')->get()->where('product.quantity', '>',0);
        $data=array();
        foreach($products as $product){
            array_push($data,$product);}
        return  response ($data);
    }

    public function select_max_discount(){
        $max_discount = discount::max('presentage_Discount');
        return $max_discount;
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
    public function store(Request $request, $product_id)
    {
        $validate = $this->discount_validation(array_merge($request->all(), ['product_id'=>$product_id]));
        if($validate->fails()){
            return response(['message'=> $validate->getMessageBag()->first()]);
        }
        Discount::create(array_merge($validate->validated(), ['product_id'=>$product_id]));
        return response(['success'=>true]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\discount  $discount
     * @return \Illuminate\Http\Response
     */
    public function show()
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\discount  $discount
     * @return \Illuminate\Http\Response
     */
    public function edit($product_id)
    {
        $discount =Discount::where('product_id', $product_id)->first();
        return $discount;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\discount  $discount
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $product_id)
    {
        $validate = $this->update_discount_validation(array_merge($request->all(), ['product_id'=>$product_id]));
        if($validate->fails()){
            return response(['message'=>$validate->getMessageBag()->first()]);
        }
        Discount::where('product_id', $product_id)->update($validate->validated());
        return response(['success'=>true, 202]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\discount  $discount
     * @return \Illuminate\Http\Response
     */
    public function destroy($product_id)
    {
        Discount::where('product_id', $product_id)->delete();
        return response(['success'=>true]);
    }
}
