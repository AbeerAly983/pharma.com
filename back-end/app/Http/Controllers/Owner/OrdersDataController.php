<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class OrdersDataController extends Controller
{
    public function index(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order=Order::count();
        $order_today=Order::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $order_month=Order::whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $order_year=Order::whereYear('created_at',$year)->count();
        $data=['total_orders'=>$order,'order_today'=>$order_today,'order_month'=>$order_month,'order_year'=>$order_year];
        return response($data);

    }
    public function Orders(){
        $orders=Order::get();
        return response($orders);
    }
    public function order_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order_today=Order::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($order_today);
    }
    public function order_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order_month=Order::whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($order_month);
    }
    public function order_year(){
        $year=Carbon::now()->format('Y');
        $order_year=Order::whereYear('created_at',$year)->get();
        return response($order_year);
    }

    public function NotDelivered(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order=Order::where('delivery_status',0)->count();
        $order_today=Order::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->where('delivery_status',0)->count();
        $order_month=Order::whereMonth('created_at',$month)->whereYear('created_at',$year)->where('delivery_status',0)->count();
        $order_year=Order::whereYear('created_at',$year)->where('delivery_status',0)->count();
        $data=['total_orders_notDelivered'=>$order,'order_notDelivered_today'=>$order_today,'order_notDelivered_month'=>$order_month,'order_notDelivered_year'=>$order_year];
        return response($data);
    }
    public function NotDelivered_Orders(){
        $orders=Order::where('delivery_status',0)->get();
        return response($orders);
    }
    public function NotDelivered_order_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order_today=Order::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->where('delivery_status',0)->get();
        return response($order_today);
    }
    public function NotDelivered_order_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order_month=Order::whereMonth('created_at',$month)->whereYear('created_at',$year)->where('delivery_status',0)->get();
        return response($order_month);
    }
    public function NotDelivered_order_year(){
        $year=Carbon::now()->format('Y');
        $order_year=Order::whereYear('created_at',$year)->where('delivery_status',0)->get();
        return response($order_year);
    }

    public function Delivered(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order=Order::where('delivery_status',1)->count();
        $order_today=Order::whereDay('updated_at',$today)->whereMonth('updated_at',$month)->whereYear('updated_at',$year)->where('delivery_status',1)->count();
        $order_month=Order::whereMonth('updated_at',$month)->whereYear('updated_at',$year)->where('delivery_status',1)->count();
        $order_year=Order::whereYear('updated_at',$year)->where('delivery_status',1)->count();
        $data=['total_orders_delivered'=>$order,'order_delivered_today'=>$order_today,'order_delivered_month'=>$order_month,'order_delivered_year'=>$order_year];
        return response($data);
    }
    public function Delivered_Orders(){
        $orders=Order::where('delivery_status',1)->get();
        return response($orders);
    }
    public function Delivered_order_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order_today=Order::whereDay('updated_at',$today)->whereMonth('updated_at',$month)->whereYear('updated_at',$year)->where('delivery_status',1)->get();
        return response($order_today);
    }
    public function Delivered_order_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order_month=Order::whereMonth('updated_at',$month)->whereYear('updated_at',$year)->where('delivery_status',1)->get();
        return response($order_month);
    }
    public function Delivered_order_year(){
        $year=Carbon::now()->format('Y');
        $order_year=Order::whereYear('updated_at',$year)->where('delivery_status',1)->get();
        return response($order_year);
    }
    public function Canceled(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order=Order::where('canceled',1)->count();
        $order_today=Order::whereDay('updated_at',$today)->whereMonth('updated_at',$month)->whereYear('updated_at',$year)->where('canceled',1)->count();
        $order_month=Order::whereMonth('updated_at',$month)->whereYear('updated_at',$year)->where('canceled',1)->count();
        $order_year=Order::whereYear('updated_at',$year)->where('canceled',1)->count();
        $data=['total_orders_canceled'=>$order,'order_canceled_today'=>$order_today,'order_canceled_month'=>$order_month,'order_canceled_year'=>$order_year];
        return response($data);
    }
    public function Canceled_Orders(){
        $orders=Order::where('canceled',1)->get();
        return response($orders);
    }
    public function Canceled_order_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order_today=Order::whereDay('updated_at',$today)->whereMonth('updated_at',$month)->whereYear('updated_at',$year)->where('canceled',1)->get();
        return response($order_today);
    }
    public function Canceled_order_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order_month=Order::whereMonth('updated_at',$month)->whereYear('updated_at',$year)->where('canceled',1)->get();
        return response($order_month);
    }
    public function Canceled_order_year(){
        $year=Carbon::now()->format('Y');
        $order_year=Order::whereYear('updated_at',$year)->where('canceled',1)->get();
        return response($order_year);
    }
    public function total_money(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order=Order::where('delivery_status',1)->get();
        $order_today=Order::whereDay('updated_at',$today)->whereMonth('updated_at',$month)->whereYear('updated_at',$year)->where('delivery_status',1)->get();
        $order_month=Order::whereMonth('updated_at',$month)->whereYear('updated_at',$year)->where('delivery_status',1)->get();
        $order_year=Order::whereYear('updated_at',$year)->where('delivery_status',1)->get();
        $total=$this->total($order->toArray());
        $total_today=$this->total($order_today->toArray());
        $total_month=$this->total($order_month->toArray());
        $total_year=$this->total($order_year->toArray());
        $data=['total'=>$total,'total_today'=>$total_today,'total_month'=>$total_month,'total_year'=>$total_year];
        return response($data);
    }
    public function total(array $payload = []){
        $total=0;
        foreach($payload as $details)
            $total += $details['price'] * $details['quantity'];
        return $total;
    }
    public function topOrders(){
        $data_id=[];
        $data_name=[];
        $data=array();
        $top_three=DB::table('orders')->select('product_id',DB::raw('count(*) as count'))->groupBy('product_id')->orderBy('count','desc')->take(3)->get();
        foreach ($top_three as $top){
            $data_id[$top->product_id]=$top->count;      }
        foreach ($data_id as $key=>$value){
            $name=DB::table('products')->where('id',$key)->value('name');
            $data_name[$name]=$value;
        }
        $count = 0;
        foreach ($data_name as $key=>$value){

            if($count==0){
                array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#044342',]);
            }
            elseif ($count==1){
                array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#7e0505',]);
            }
            else{
                array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#ed9e20',]);
            }
            $count += 1;
        }
        return response($data);
    }
    public function topSales(){
        $data_id=[];
        $data_name=[];
        $data=array();
        $top_three=DB::table('orders')->where('delivery_status',1)->select('product_id',DB::raw('count(*) as count'))->groupBy('product_id')->orderBy('count','desc')->take(3)->get();
        foreach ($top_three as $top){
            $data_id[$top->product_id]=$top->count;      }
        foreach ($data_id as $key=>$value){
            $name=DB::table('products')->where('id',$key)->value('name');
            $data_name[$name]=$value;
        }
        $count = 0;
        foreach ($data_name as $key=>$value){

            if($count==0){
              array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#044342',]);
            }
            elseif ($count==1){
                array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#7e0505',]);
            }
            else{
                array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#ed9e20',]);
            }
            $count += 1;
        }

        return response($data);
    }
    public function topcanceled(){
        $data_id=[];
        $data_name=[];
        $data=array();
        $top_three=DB::table('orders')->where('canceled',1)->select('product_id',DB::raw('count(*) as count'))->groupBy('product_id')->orderBy('count','desc')->take(3)->get();
        foreach ($top_three as $top){
            $data_id[$top->product_id]=$top->count;      }
        foreach ($data_id as $key=>$value){
            $name=DB::table('products')->where('id',$key)->value('name');
            $data_name[$name]=$value;
        }
        $count = 0;
        foreach ($data_name as $key=>$value){

            if($count==0){
                array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#044342',]);
            }
            elseif ($count==1){
                array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#7e0505',]);
            }
            else{
                array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#ed9e20',]);
            }
            $count += 1;
        }
        return response($data);
    }


    public function lastyear_sales(){
        $data=array();
        $months=array();
        $alldata=array();
        for($i=0;$i<12;$i++){
            $month=Carbon::now()->subMonths($i)->format('M');
            $year=Carbon::now()->subMonths($i)->year;
            array_push($months,$month.' '.$year);

            $order_month=Order::whereMonth('updated_at',Carbon::parse($month)->month)->where('delivery_status',1)->get();
            $total_month=$this->total($order_month->toArray());
            array_push($data,$total_month);
        }
        array_push($alldata,array_reverse($months));
        array_push($alldata,array_reverse($data));
        return response($alldata);
    }
    public function lastyear_orders(){
        $data=array();
        $months=array();
        $alldata=array();
        for($i=0;$i<12;$i++){
            $month=Carbon::now()->subMonths($i)->format('M');
            $year=Carbon::now()->subMonths($i)->year;
            array_push($months,$month.' '.$year);
            $order_month=Order::whereMonth('updated_at',Carbon::parse($month)->month)->where('delivery_status',1)->count();
            array_push($data,$order_month);

        }
        array_push($alldata,array_reverse($months));
        array_push($alldata,array_reverse($data));
        return response($alldata);
    }

    public function topPending(){
        $data_id=[];
        $data_name=[];
        $data=array();
        $top_three=DB::table('orders')->where('delivery_status',0)->where('canceled',0)->select('product_id',DB::raw('count(*) as count'))->groupBy('product_id')->orderBy('count','desc')->take(3)->get();
        foreach ($top_three as $top){
            $data_id[$top->product_id]=$top->count;      }
        foreach ($data_id as $key=>$value){
            $name=DB::table('products')->where('id',$key)->value('name');
            $data_name[$name]=$value;
        }
        $count = 0;
        foreach ($data_name as $key=>$value){

            if($count==0){
                array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#044342',]);
            }
            elseif ($count==1){
                array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#7e0505',]);
            }
            else{
                array_push($data,['name'=> $key, 'y'=> $value, 'color'=> '#ed9e20',]);
            }
            $count += 1;
        }

        return response($data);
    }
}
