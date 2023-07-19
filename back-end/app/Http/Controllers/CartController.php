<?php

namespace App\Http\Controllers;

use App\Http\Controllers\OrderController;
use App\Models\cart;
use App\Models\discount;
use App\Models\Product;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    //use OrderController;
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function my_cart()
    {
        $id = Auth::user()->id;
        $carts = cart::where('user_id', 'like', '%' . $id . '%')->get();
        $data=array();

        if (!$carts->isEmpty()) {

            foreach ($carts as $cart) {
                $discount_price = discount::where('product_id', $cart->product_id)->first();
                $product=Product::where('id', $cart->product_id)->first();

                if ($discount_price) {
                    array_push($data,[
                        'id'=>$product->id,
                        'name'=>$product->name,
                        'price'=>$discount_price->discount_price,
                        'price_before_discount'=>$product->price,
                        'presentage'=>$discount_price->presentage_Discount,
                        'quantity'=>$cart->qty,
                        'image'=>$product->photo,
                        'production'=>$product->company_name.','.$product->brandCountr,
                    ]);
                }
                else {
                    array_push($data, [
                        'id'=>$product->id,
                        'name' => $product->name,
                        'price' => $product->price,
                        'presentage'=>0,
                        'quantity' => $cart->qty,
                        'image' => $product->photo,
                        'production'=>$product->company_name.','.$product->brandCountry,
                    ]);
                }}
            
        }
        $total=(new OrderController)->total($data);
        $data_with_price=['data'=>$data,'total'=>$total ,'numOfCartItems'=>cart::where('user_id', 'like', '%' . $id . '%')->count()];
        return $data_with_price;

    }

    public function add_to_cart($id)
    {
        $UserId = Auth::user()->id;
        $cart = cart::where('user_id', 'like', '%' . $UserId . '%')->where('product_id', 'like', '%' . $id . '%')->get();
        $product_quantity = Product::where('id', 'like', '%' . $id . '%')->first()->quantity;
        $cart_quantity = cart::where('user_id', 'like', '%' . $UserId . '%')->where('product_id', 'like', '%' . $id . '%');
        if (!$cart->isEmpty()) {
            if ($product_quantity > $cart_quantity->first()->qty) {

                $cart_quantity->increment('qty');
                return response()->json(['message' => 'Product add to cart successfully' ,'numOfCartItems'=>cart::where('user_id', 'like', '%' . $UserId . '%')->count()]);
            } else {
                return response()->json(['message' => 'No enough items in store' ,'numOfCartItems'=>cart::where('user_id', 'like', '%' . $UserId . '%')->count()]);
            }
        } else {
            cart::create([
                'user_id' => $UserId,
                'qty' => 1,
                'product_id' => $id,
            ]);
            return response()->json(['message' => 'Product add to cart successfully' ,'numOfCartItems'=>cart::where('user_id', 'like', '%' . $UserId . '%')->count()]);
        }
    }
    public function delete($id){
        $UserId = Auth::user()->id;
        $cart=cart::where('user_id', 'like', '%'.$UserId.'%')->where('product_id', 'like', '%'.$id.'%')->delete();
        if($cart){
            return response()->json(['message' => 'Delete Success' ,'numOfCartItems'=>cart::where('user_id', 'like', '%' . $UserId . '%')->count()]);
        }
        return response()->json(['message' => 'Failed to Delete','numOfCartItems'=>cart::where('user_id', 'like', '%' . $UserId . '%')->count()]);

    }
    public function delete_all(){
        $UserId = Auth::user()->id;
        $cart=cart::where('user_id', 'like', '%'.$UserId.'%')->delete();
        if($cart){
            return response()->json(['message' => 'Delete Success','numOfCartItems'=>cart::where('user_id', 'like', '%' . $UserId . '%')->count()]);
        }
        return response()->json(['message' => 'Failed to Delete','numOfCartItems'=>cart::where('user_id', 'like', '%' . $UserId . '%')->count()]);

    }
    public function increase($id){
        $UserId = Auth::user()->id;
        $product_quantity=Product::where('id', 'like', '%'.$id.'%')->first()->quantity;
        $cart_quantity=cart::where('user_id', 'like', '%'.$UserId.'%')->where('product_id', 'like', '%'.$id.'%');

        if ($product_quantity>$cart_quantity->first()->qty){

            $cart_quantity->increment('qty');
        }
        else {
            return response()->json(['message' => 'No enough items in store']);
        }
    }
    public function decrease($id){
        $UserId = Auth::user()->id;
        $cart_quantity=cart::where('user_id', 'like', '%'.$UserId.'%')->where('product_id', 'like', '%'.$id.'%')->first()->qty;
        if($cart_quantity<=1){
            return response()->json(['message' => 'Failed to decrease the quantity']);
        }
        cart::where('user_id', 'like', '%'.$UserId.'%')->where('product_id', 'like', '%'.$id.'%')->decrement('qty');


    }
    public function address(){
        $UserId = Auth::user()->id;
        $data=User::where('user_id', 'like', '%'.$UserId.'%')->get(['city','street','phone']);
        return $data;

    }
}
