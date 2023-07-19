<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Labs;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class labsDataController extends Controller
{
    public function index(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');

        $labs=Labs::count();
        $lab_today=Labs::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $lab_month=Labs::whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $lab_year=Labs::whereYear('created_at',$year)->count();
        $data=['total_labs'=>$labs,'lab_today'=>$lab_today,'lab_month'=>$lab_month,'lab_year'=>$lab_year];
        return response($data);

    }
    public function Labs(){
        $labs=Labs::get();
        return response($labs);
    }
    public function lab_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $lab_today=Labs::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($lab_today);
    }
    public function lab_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $lab_month=Labs::whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($lab_month);
    }
    public function lab_year(){
        $year=Carbon::now()->format('Y');
        $lab_year=Labs::whereYear('created_at',$year)->get();
        return response($lab_year);
    }
}
