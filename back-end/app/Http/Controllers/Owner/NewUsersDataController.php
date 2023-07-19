<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\new_user;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class NewUsersDataController extends Controller
{
    public function index(){

        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $user_not_verify=new_user::count();
        $new_user_today=new_user::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $new_user_month=new_user::whereMonth('created_at',$month)->whereYear('created_at',$year)->count();
        $new_user_year=new_user::whereYear('created_at',$year)->count();
        $data=['total_users_not_verify'=>$user_not_verify,'new_user_today'=>$new_user_today,'new_user_month'=>$new_user_month,'new_user_year'=>$new_user_year];
        return response($data);

    }
    public function new_users(){
        $new_users=new_user::get();
        return response($new_users);
    }
    public function new_user_today(){
        $today=Carbon::now()->format('d');
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $new_user_today=new_user::whereDay('created_at',$today)->whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($new_user_today);
    }
    public function new_user_month(){
        $month=Carbon::now()->format('m');
        $year=Carbon::now()->format('Y');
        $new_user_month=new_user::whereMonth('created_at',$month)->whereYear('created_at',$year)->get();
        return response($new_user_month);
    }
    public function new_user_year(){
        $year=Carbon::now()->format('Y');
        $new_user_year=new_user::whereYear('created_at',$year)->get();
        return response($new_user_year);
    }
    public function lastyear_new_user(){
        $data=array();
        $months=array();
        $alldata=array();
        for($i=0;$i<12;$i++){
            $month=Carbon::now()->subMonths($i)->monthName;
            $year=Carbon::now()->subMonths($i)->year;
            array_push($months,$month.' '.$year);
            $new_user_month=new_user::whereMonth('created_at',Carbon::parse($month)->month)->count();
            array_push($data,$new_user_month);
        }
        array_push($alldata,array_reverse($months));
        array_push($alldata,array_reverse($data));
        return response($alldata);
    }
}
