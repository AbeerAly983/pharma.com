<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\orderCordinator;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class OrderCoordinatorsDataController extends Controller
{
    public function index(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');

        $order_cordinators=orderCordinator::count();
        $order_cordinator_today=orderCordinator::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $order_cordinator_month=orderCordinator::whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $order_cordinator_year=orderCordinator::whereYear('created_at',$year)->count();
        $data=['total_order_cordinators'=>$order_cordinators,'order_cordinator_today'=>$order_cordinator_today,'order_cordinator_month'=>$order_cordinator_month,'order_cordinator_year'=>$order_cordinator_year];
        return response($data);

    }
    public function order_cordinators(){
        $order_cordinators=orderCordinator::get();
        return response($order_cordinators);
    }
    public function order_cordinator_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order_cordinator_today=orderCordinator::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($order_cordinator_today);
    }
    public function order_cordinator_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $order_cordinator_month=orderCordinator::whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($order_cordinator_month);
    }
    public function order_cordinator_year(){
        $year=Carbon::now()->format('Y');
        $order_cordinator_year=orderCordinator::whereYear('created_at',$year)->get();
        return response($order_cordinator_year);
    }
}
