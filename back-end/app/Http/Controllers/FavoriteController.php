<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\discount;
use App\Models\Favorite;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function my_favorite()
    {
        $id = Auth::user()->id;
        $favorites = Favorite::where('user_id', 'like', '%' . $id . '%')->get();
        $alldata=array();

        foreach ($favorites as $favorite){
            $product=Product::with('type')->with('discount')->get()->where('quantity', '>',0)->where('id', $favorite->product_id)->first();
            $discount=discount::where('product_id', $favorite->product_id)->first();
            $data=['id'=> $product->id,
                'name'=>$product->name,
                "photo"=> $product->photo,
                ];
            if($product->quantity>0){
                $data['in_stock']='In Stoke';
                if($discount){
                    $data['price']=$product->price;
                    $data['presentage_Discount']=$product->discount->presentage_Discount;
                    $data['discount_price']=$product->discount->discount_price;
                }
                else{
                    $data['price']=$product->price;
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
            array_push($alldata,$data);
        }


        $data_with_number_of_favorite=[$alldata,['numOfFavoriteItems'=>Favorite::where('user_id', 'like', '%' . $id . '%')->count()]];
        return $data_with_number_of_favorite;


    }

    public function add_to_favorite($id)
    {
        $UserId = Auth::user()->id;
        $favorites = Favorite::where('user_id', 'like', '%' . $UserId . '%')->get();

        if ($favorites) {
            foreach ($favorites as $favorite){
                if($favorite->product_id==$id){
                    return response()->json(['message' => 'Product allready in your favourite','numOfFavoriteItems'=>Favorite::where('user_id', 'like', '%' . $UserId . '%')->count()]);
                }
            }

            Favorite::create([
                'user_id' => $UserId,
                'product_id' => $id,
            ]);
            return response()->json(['message' => 'Product add to favourite successfully','numOfFavoriteItems'=>Favorite::where('user_id', 'like', '%' . $UserId . '%')->count()]);
        }

        else {
            Favorite::create([
                'user_id' => $UserId,
                'product_id' => $id,
            ]);
            return response()->json(['message' => 'Product add to favourite successfully','numOfFavoriteItems'=>Favorite::where('user_id', 'like', '%' . $UserId . '%')->count()]);
       }
    }
    public function delete($id){
        $UserId = Auth::user()->id;
        $cart=Favorite::where('user_id', 'like', '%'.$UserId.'%')->where('product_id', 'like', '%'.$id.'%')->delete();
        if($cart){
            return response()->json(['message' => 'Delete Success','numOfFavoriteItems'=>Favorite::where('user_id', 'like', '%' . $UserId . '%')->count()]);
        }
        return response()->json(['message' => 'Failed to Delete','numOfFavoriteItems'=>Favorite::where('user_id', 'like', '%' . $UserId . '%')->count()]);

    }


}
