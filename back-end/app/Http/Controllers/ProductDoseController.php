<?php

namespace App\Http\Controllers;

use App\Models\doseOfProduct;
use App\Models\ProductCases;
use App\Models\ProductIndication;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ProductValidation;

class ProductDoseController extends Controller
{
    use ProductValidation;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = ProductCases::select('id','ProductName', 'composition')->get();
        return response()->json($products);
    }

    private function show_product($id){
        $products = ProductCases::where('id', $id)->first();
        return $products;
    }

    public function store_product(Request $request)
    {
        $validators = $this->product_caseValidation($request->all());
        if($validators->fails()){
            return response()->json(['message'=> $validators->getMessageBag()->first()]);
        }
        $data = ProductCases::create($validators->validated());
        return response()->json(['product_id' => $data->id]);

    }

    public function store_product_indication(Request $request, $product_id){
        $validators = $this->product_indication_validation($request->all());
        if($validators->fails()){
            return response()->json(['message'=> $validators->getMessageBag()->first()]);
        }
        $data = ProductIndication::create(['indication'=>$request->indication, 'product_id'=>$product_id]);
        return response()->json(['indication_id' => $data->id]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $indication_id)
    {
        $validators = $this->product_dose_validation($request->all());
        if($validators->fails()){
            return response()->json(['message'=> $validators->getMessageBag()->first()]);
        }
        $data = $this->equal_to_null(json_encode($request->all()));
        doseOfProduct::create(array_merge($data, ['indication_id'=>$indication_id]));

    }

    private function equal_to_null($data){
        $data = json_decode($data, True);
        foreach($data as $key => $value){
            if($value === "0" || $value === 0)
                $data[$key] = null;
        }
        return $data;
    }

    public function indication()
    {
        $Indication = ProductIndication::get();
        return response($Indication);
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductDose  $productDose
     * @return \Illuminate\Http\Response
     */
    public function show($age, $weight, $product_id)
    {
        if($weight > 0)
            return $this->show_by_weight($weight, $product_id);
        else if($age > 0)
            return $this->show_by_age($age, $product_id);
        else
            return response()->json(['message'=>'must select age or weight']);

    }

    private function show_by_age($age, $product_id){
        $indications = ProductIndication::where('product_id', $product_id)->get();
        $arr = [];
        foreach($indications as $indication){
            $doses = doseOfProduct::where('indication_id', $indication->id)->get();
            foreach($doses as $dose){
                if($dose->max_age == null){
                    if($age >= $dose->min_age)
                        array_push($arr, ['indication'=>$indication->indication, 'dose'=>$dose->dose]);
                }
                else if($dose->min_age == null)
                    $dose->min_age = $age;


                if($age >= $dose->min_age && $age<= $dose->max_age)
                    array_push($arr, ['indication'=>$indication->indication ,'dose'=>$dose->dose]);
            }
        }
        $product = $this->show_product($product_id);
        if($arr == null)
            return response(['message'=> $product->ProductName .' doesn\'t match with '. $age. ' years old']);
        return response()->json(['age'=> $age.' years old','product'=>$product,'dose'=>$arr]);
    }

    private function show_by_weight($weight, $product_id){
        $indications = ProductIndication::where('product_id', $product_id)->get();
        $arr = [];
        foreach($indications as $indication){
            $doses = doseOfProduct::where('indication_id', $indication->id)->get();
            foreach($doses as $dose){
                if($dose->max_weight == null){
                    if($weight >= $dose->min_weight)
                        array_push($arr, ['indication'=>$indication->indication, 'dose'=>$dose->dose]);
                }
                else if($dose->min_weight == null)
                    $dose->min_weight = $weight;


                if($weight >= $dose->min_weight && $weight<= $dose->max_weight)
                    array_push($arr, ['indication'=>$indication->indication ,'dose'=>$dose->dose]);
            }
        }
        $product = $this->show_product($product_id);
        if($arr == null)
            return response(['message'=> $product->ProductName .' doesn\'t match with '. $weight. ' KG']);

        return response()->json(['weight' => $weight .'kg','product'=>$product,'dose'=>$arr]);
    }


    public function show_productDose($product_id)
    {
        $arr = [];
        $indications = ProductIndication::get()->where('product.id', $product_id);
        foreach($indications as $indication){
            $doses = doseOfProduct::where('indication_id', $indication->id)->get();
            array_push($arr, [
                'indication_id' => $indication->id,
                'indication' =>$indication->indication,
                'doses' => $doses
            ]);

        }
        return response($arr);
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProductDose  $productDose
     * @return \Illuminate\Http\Response
     */
    public function edit_productCase($id)
    {
        $product = ProductCases::where('id', $id)->first();
        return response($product);
    }

    public function edit_productIndication($id)
    {
        $indication = ProductIndication::where('id', $id)->first();
        return response($indication);
    }

    public function edit_productDose($id)
    {
        $doseOfProduct = doseOfProduct::where('id', $id)->first();
        return response($doseOfProduct);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductDose  $productDose
     * @return \Illuminate\Http\Response
     */
    public function update_productCase(Request $request, $id)
    {
        $validators = $this->product_caseValidation($request->all());
        if($validators->fails()){
            return response()->json(['message'=> $validators->getMessageBag()->first()]);
        }
        $product = ProductCases::where('id', $id)->update($request->all());
        return response()->json(['message' => 'success']);
    }

    public function update_productIndication(Request $request, $id)
    {
        $validators = $this->product_indication_validation($request->all());
        if($validators->fails()){
            return response()->json(['message'=> $validators->getMessageBag()->first()]);
        }
        $data = ProductIndication::where('id' , $id)->update(['indication'=>$request->indication]);
        return response()->json(['message' => 'success']);
    }

    public function update_productDose(Request $request, $id)
    {
        $validators = $this->product_dose_validation($request->all());
        if($validators->fails()){
            return response()->json(['message'=> $validators->getMessageBag()->first()]);
        }
        $data = $this->equal_to_null(json_encode($request->all()));
        doseOfProduct::where('id', $id)->update($data);
        return response()->json(['message' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductDose  $productDose
     * @return \Illuminate\Http\Response
     */
    public function destroy_productCase($id)
    {
        ProductCases::where('id', $id)->delete();
        return response()->json(['message' => 'success']);
    }

    public function destroy_productIndication($id)
    {
        productIndication::where('id', $id)->delete();
        return response()->json(['message' => 'success']);
    }

    public function destroy_productDose($id)
    {
        doseOfProduct::where('id', $id)->delete();
        return response()->json(['message' => 'success']);
    }
}
