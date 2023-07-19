<?php

namespace App\Http\Controllers\Accountant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DeliveredOrders;
use App\Models\Order;
use App\Models\Product;

class DeliveredOrderController extends Controller
{
    public function store($order_id)
    {
        DeliveredOrders::create([
            'order_left_id' => $order_id,
        ]);
    }

    public function show_notDeliveredOrders(){
        $arr =[];
        $orders = DeliveredOrders::with('orderLeft')->where('canceled_quantity', 0)->where('delivered_quantity', 0)->get();
        foreach($orders as $order){
            array_push($arr, [
                'order_id' => $order->id,
                'product_name' => $order->orderLeft->order->product->name,
                'qrCode' => $order->orderLeft->order->product->qrCode,
                'photo' => $order->orderLeft->order->product->photo,
                'quantity' => $order->orderLeft->order->quantity,
                'price' => $order->orderLeft->order->price,
                'user_name' => $order->orderLeft->order->user->first_name . ' ' . $order->orderLeft->order->user->last_name,
                'phone' => $order->orderLeft->order->user->phone,

            ]);
        }
        return response($arr);
    }

    public function show_DeliveredOrders(){
        $arr =[];
        $orders = DeliveredOrders::with('orderLeft')->where('delivered_quantity','!=', 0)->get();
        foreach($orders as $order){
            array_push($arr, [
                'order_id' => $order->id,
                'product_name' => $order->orderLeft->order->product->name,
                'qrCode' => $order->orderLeft->order->product->qrCode,
                'photo' => $order->orderLeft->order->product->photo,
                'quantity' => $order->orderLeft->order->quantity,
                'price' => $order->orderLeft->order->price,
                'user_name' => $order->orderLeft->order->user->first_name . ' ' . $order->orderLeft->order->user->last_name,
                'phone' => $order->orderLeft->order->user->phone,

            ]);
        }
        return response($arr);
    }

    public function making_order_delivered($id){
       $order = DeliveredOrders::with('orderLeft')->where('id', $id)->first();
       $this->update_orderStatus($order->orderLeft->order_id);
       $order->update(['delivered_quantity'=>$order->orderLeft->order->quantity]);
       $this->add_accountant_to_order($id);
       return response(['success' => true]);
    }

    public function making_order_canceled($id){
        $order = DeliveredOrders::with('orderLeft')->where('id', $id)->first();
        $this->update_orderCanceled($order->orderLeft->order_id);
        $this->update_productQuantity(
            $order->orderLeft->order->product->id,
            $order->orderLeft->order->quantity
        );
        $order->update(['canceled_quantity'=>$order->orderLeft->order->quantity]);
        $this->add_accountant_to_order($id);
        return response(['success' => true]);

    }

    public function makeing_canceled_forSomeQuantities(Request $request, $id){
        $request->validate([
            'canceled_quantity' => 'required | integer',
            'delivered_quantity' => 'required | integer',
        ]);
        $canceled_quantity = $request->canceled_quantity;
        $delivered_quantity = $request->delivered_quantity;
        $order = DeliveredOrders::with('orderLeft')->where('id', $id)->first();
        if($canceled_quantity >0 && $delivered_quantity > 0){
            if( $canceled_quantity + $delivered_quantity == $order->orderLeft->order->quantity){
                $this->update_orderStatus($order->orderLeft->order_id);
                $order->update(['delivered_quantity'=>$delivered_quantity]);
                $this->update_orderQuantity($order->orderLeft->order_id, $delivered_quantity);
                $this->update_productQuantity(
                    $order->orderLeft->order->product->id,
                    $canceled_quantity
                );
                $order->update(['canceled_quantity'=>$canceled_quantity]);
                $this->add_accountant_to_order($id);
                return response(['success' => true]);
            }
            else{
                return response(
                    ['message' =>
                            'total canceled and delivered quantity is not equal to quantitiy that this user required']);
            }
        }
        else
            return response(['message' => 'zero value is not available']);


    }

    private function add_accountant_to_order($id){
        DeliveredOrders::where('id', $id)->update([
            'accountant_id' => auth()->guard('accountant')->user()->id
        ]);

    }

    private function update_orderStatus($id){
        Order::where('id', $id)->update([
            'delivery_status' => true
        ]);
    }

    private function update_orderQuantity($id, $quantity){
        Order::where('id', $id)->update([
            'quantity' => $quantity
        ]);
    }

    private function update_orderCanceled($id){
        Order::where('id', $id)->update([
            'canceled' => true
        ]);
    }

    private function update_productQuantity($id, $quantity){
        $product = Product::where('id', $id)->first();
        $product->update(['quantity' => $product->quantity + $quantity]);
    }


}
