<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\news;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class newsDataController extends Controller
{
    public function index(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');

        $news=news::count();
        $new_today=news::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $new_month=news::whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $new_year=news::whereYear('created_at',$year)->count();
        $data=['total_news'=>$news,'new_today'=>$new_today,'new_month'=>$new_month,'new_year'=>$new_year];
        return response($data);

    }
    public function News(){
        $news=news::get();
        return response($news);
    }
    public function new_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $new_today=news::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($new_today);
    }
    public function new_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $new_month=news::whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($new_month);
    }
    public function new_year(){
        $year=Carbon::now()->format('Y');
        $new_year=news::whereYear('created_at',$year)->get();
        return response($new_year);
    }
}
