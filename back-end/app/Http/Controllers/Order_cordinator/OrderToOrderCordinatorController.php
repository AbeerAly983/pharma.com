<?php

namespace App\Http\Controllers\Order_cordinator;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\orderCordinator;
use App\Models\OrderLeft;
use App\Http\Controllers\Accountant\DeliveredOrderController;

class OrderToOrderCordinatorController extends Controller
{
    private $deliveredOrder;
    public function __construct(){
        $this->deliveredOrder = new DeliveredOrderController();
    }

    public function add_order($order_id){
        OrderLeft::create([
            'order_cordinator_id' => Null,
            'order_id' => $order_id
        ]);
    }

    public function show_users(){
        $users = [];
        $orders = OrderLeft::with('order')->get()->where('left', false);
        foreach($orders as $order){
            if(! in_array($order->order->user->id, array_column($users, 'user_id'))){
                array_push($users, [
                    'user_id' => $order->order->user->id,
                    'user_name' => $order->order->user->first_name . ' ' . $order->order->user->last_name,
                    'phone' => $order->order->user->phone,
                    'city' => $order->order->user->city,
                    'street' => $order->order->user->street
                ]);
            }
        }
        return response($users);
    }

    public function show_orders($user_id){
        $arr = []; $total_price = 0; $arr2 =[];
        $orders = OrderLeft::with('order')->get()
        ->where('order.user_id', $user_id)->where('left', false);

        foreach($orders as $order){
            array_push($arr, [
                'order_id' => $order->id,
                'product_name' => $order->order->product->name,
                'qrCode' => $order->order->product->qrCode,
                'photo' => $order->order->product->photo,
                'quantity' => $order->order->quantity,
                'price' => $order->order->price,
            ]);
            $total_price +=$order->order->price;

        }
        $total = ['total'=> $total_price . 'EG'];
        $arr = ['data' => $arr];
        $arr2 = array_merge($arr, $total);
        return response($arr2);
    }



    public function show_orders_left(){
        $arr = [];
        $orders = OrderLeft::with('order')->get()->where('left', true);
        foreach($orders as $order){
            array_push($arr, [
                'order_id' => $order->id,
                'product_name' => $order->order->product->name,
                'qrCode' => $order->order->product->qrCode,
                'photo' => $order->order->product->photo,
                'quantity' => $order->order->quantity,
                'price' => $order->order->price,
                'user_name' => $order->order->user->first_name . ' ' . $order->order->user->last_name,
                'phone' => $order->order->user->phone,
                'city' => $order->order->user->city,
                'street' => $order->order->user->street,
                'order_cordinator' => $order->orderCordinator->first_name . ' '. $order->orderCordinator->last_name
            ]);
        }
        return response($arr);
    }

    public function show_orders_not_left(){
        $arr = [];
        $orders = OrderLeft::with('order')->get()->where('left', false);
        foreach($orders as $order){
            array_push($arr, [
                'order_id' => $order->id,
                'product_name' => $order->order->product->name,
                'qrCode' => $order->order->product->qrCode,
                'photo' => $order->order->product->photo,
                'quantity' => $order->order->quantity,
                'price' => $order->order->price,
                'user_name' => $order->order->user->first_name . ' ' . $order->order->user->last_name,
                'phone' => $order->order->user->phone,
                'city' => $order->order->user->city,
                'street' => $order->order->user->street

            ]);
        }
        return response($arr);
    }

    public function do_left_for_order($id){
        $orders = OrderLeft::where('id', $id)
        ->update(['left' => true]);
        $this->add_orderCoordinator_to_order($id);
        $this->deliveredOrder->store($id);
        return response(['success'=>true]);

    }

    public function do_left_for_all_orders($user_id){
        $orders = OrderLeft::with('order')->get()->where('order.user_id', $user_id)
        ->where('left', false);
        foreach($orders as $order){
            $order->left = true;
            $order->save();
            $this->add_orderCoordinator_to_order($order->id);
            $this->deliveredOrder->store($order->id);
        }
        return response(['success'=>true]);
    }

    public function do_shipped_for_orders(){
        $orders = OrderLeft::with('order')->get()
        ->where('left', false);
        foreach($orders as $order){
            $order->left = true;
            $order->save();
            $this->add_orderCoordinator_to_order($order->id);
            $this->deliveredOrder->store($order->id);
        }
        return response(['success'=>true]);
    }

    public function add_orderCoordinator_to_order($order_id){
        OrderLeft::where('id', $order_id)->update(['order_cordinator_id' => auth()->guard('orderCoordinator')->user()->id]);
    }
}
