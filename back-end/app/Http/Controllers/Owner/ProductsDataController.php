<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ProductsDataController extends Controller
{
    public function index(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');

        $products=Product::count();
        $product_today=Product::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $product_month=Product::whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $product_year=Product::whereYear('created_at',$year)->count();
        $data=['total_products'=>$products,'product_today'=>$product_today,'product_month'=>$product_month,'product_year'=>$product_year];
        return response($data);

    }
    public function products(){
        $products=Product::get();
        return response($products);
    }
    public function product_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $product_today=Product::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($product_today);
    }
    public function product_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $product_month=Product::whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($product_month);
    }
    public function product_year(){
        $year=Carbon::now()->format('Y');
        $product_year=Product::whereYear('created_at',$year)->get();
        return response($product_year);
    }
}
