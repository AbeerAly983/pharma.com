<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Accountant;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class AccountantsDataController extends Controller
{
    public function index(){

        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');

        $accountants=Accountant::count();
        $accountant_today=Accountant::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $accountant_month=Accountant::whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $accountant_year=Accountant::whereYear('created_at',$year)->count();
        $data=['total_accountants'=>$accountants,'accountant_today'=>$accountant_today,'accountant_month'=>$accountant_month,'accountant_year'=>$accountant_year];
        return response($data);

    }
    public function accountants(){
        $accountants=Accountant::get();
        return response($accountants);
    }
    public function accountant_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $accountant_today=Accountant::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($accountant_today);
    }
    public function accountant_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $accountant_month=Accountant::whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($accountant_month);
    }
    public function accountant_year(){
        $year=Carbon::now()->format('Y');
        $accountant_year=Accountant::whereYear('created_at',$year)->get();
        return response($accountant_year);
    }
}
