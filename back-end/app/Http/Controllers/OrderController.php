<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\cart;
use App\Models\Product;
use App\Models\discount;
use App\Models\Pending;
use App\Models\User;
use App\Models\Order;
use App\Http\Controllers\Order_cordinator\OrderToOrderCordinatorController;

class OrderController extends Controller
{
   private  $user_id;
   private $order_cordinator;
   public function __construct(){
     $this->user_id = Auth::user()->id;
     $this->order_cordinator = new OrderToOrderCordinatorController();
   }
    public function index(){
        $orders = Order::with('product')->with('user')->get()->where('user_id',$this->user_id);
        $data=array();
        foreach($orders as $order){
            array_push($data,$order);
        }

        return  response ($data);

    }

    public function show_pending_order(){
        $orders = Pending::with('order')->with('order.product')->get()->where('order.user_id',$this->user_id);
        $data=array();
        foreach($orders as $order){
            array_push($data,$order);
        }

        return  response ($data);
    }

    public function show_shipped(){
        $orders = Order::with('product')->get()->where('user_id',$this->user_id)->where('delivery_status', true);
        $data=array();
        foreach($orders as $order){
            array_push($data,$order);
        }

        return  response ($data);
    }

    public function show($id){
        $order = Order::with('product')->where('user_id',$this->user_id)->where('id', $id)->first();
        $data=array();
        foreach($orders as $order){
            array_push($data,$order);
        }

        return  response ($data);
    }

    public function create(Request $request){
        $data =  $request->validate([
            'city' => 'required|string',
            'street' =>'required|string',
            'phone' => 'required|numeric'
        ]);

        $user_id = Auth::User()->id;
        $user = User::find($user_id);
        $user->city = $request->city;
        $user->street = $request->street;
        $user->phone =  $request->phone;
        $user->save();

        $carts = cart::where('user_id', $user_id)->get();
        foreach($carts as $cart){
            $product = Product::where('id', $cart->product_id)->first();
            if($cart->qty > $product->quantity)
                return response(['error' => 'quatity of '.$product->name.' is not available']);
            $order = new Order();
            $order->user_id = $user_id;
            $order->product_id = $cart->product_id;
            $order->quantity = $cart->qty;
            $product->quantity = $product->quantity -1;
            $product->save();
            $price = $product->price;
            $discount_price = discount::where('product_id',$cart->product_id)->first();
            if($discount_price)
              $price = $discount_price->discount_price;
            $order->price = $price;
            $order->totalPrice = $price * $cart->qty;
            $order->save();
            $cart->delete();
            Pending::create([
                'order_id' => $order->id
            ]);
            $this->order_cordinator->add_order($order->id);
        }

        return response(['success' => true],200);

    }

    public function show_total_price(){
        $orders = Pending::with('order')->with('order.product')->get()->where('order.user_id',$this->user_id);
        $total = $orders->sum('order.price');
        return response($total." EGP");

    }
    public function total(array $payload = []){
       $total=0;
       foreach($payload as $details)
            $total += $details['price'] * $details['quantity'];
       return $total." EGP";
    }

}
