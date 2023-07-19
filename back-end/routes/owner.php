<?php

use App\Http\Controllers\Owner\AccountantsDataController;
use App\Http\Controllers\Owner\AdminsDataController;
use App\Http\Controllers\Owner\AuthOwnerController;
use App\Http\Controllers\Owner\DoctorsDataController;
use App\Http\Controllers\Owner\labsDataController;
use App\Http\Controllers\Owner\LiveSessionsDataController;
use App\Http\Controllers\Owner\newsDataController;
use App\Http\Controllers\Owner\NewUsersDataController;
use App\Http\Controllers\Owner\OrderCoordinatorsDataController;
use App\Http\Controllers\Owner\ProductsDataController;
use App\Http\Controllers\Owner\UsersDataController;
use App\Http\Controllers\Owner\OrdersDataController;
use App\Http\Controllers\Owner\AdminController;
use App\Http\Controllers\Owner\profile\emailVerificationController;
use App\Http\Controllers\Owner\profile\ForgotPasswordController;
use App\Http\Controllers\Owner\profile\resetPasswordController;
use App\Http\Controllers\Owner\profile\UpdateProfileController;

Route::prefix('owner')->group(function(){
    Route::middleware('guest:owner')->group(function(){
        Route::controller(AuthOwnerController::class)->group(function(){
            Route::post('login', 'login');
        });

        //Route::post('/verifyEmail', [emailVerificationController::class, 'verify_email']);
        Route::post('/forgotPassword', [ForgotPasswordController::class, 'forgot_password']);
        Route::post('/resetPassword', [resetPasswordController::class, 'reset_password']);
    });

    Route::middleware('auth:owner')->group(function(){
        Route::controller(AuthOwnerController::class )->group(function(){
            Route::post('logout', 'logout');
            Route::get('profile', 'userProfile');
        });

        Route::controller(UpdateProfileController::class)->group(function(){
            Route::get('/editProfile', 'edit_userName');
            Route::post('/updateProfile', 'update_userName');
            Route::post('/updatePassword', 'update_password');
            Route::get('edit_email', 'edit_email');
            Route::post('update_email', 'update_email');
            Route::post('new_email_verification', 'new_email_verification');
        });

        Route::controller(AdminController::class)->group(function(){
            Route::post('add_admin', 'add_admin');
            Route::get('show_admins','index');
            Route::post('disable_admin/{id}','disable');
            Route::post('able_admin/{id}', 'able');
        });

        Route::controller(AccountantsDataController::class )->group(function(){
            Route::get('accountants', 'index');
            Route::get('accountants/all', 'accountants');
            Route::get('accountants/today', 'accountant_today');
            Route::get('accountants/month', 'accountant_month');
            Route::get('accountants/year', 'accountant_year');
        });
        Route::controller(AdminsDataController::class )->group(function(){
            Route::get('admins', 'index');
            Route::get('admins/all', 'admins');
            Route::get('admins/today', 'admin_today');
            Route::get('admins/month', 'admin_month');
            Route::get('admins/year', 'admin_year');
        });
        Route::controller(DoctorsDataController::class )->group(function(){
            Route::get('doctors', 'index');
            Route::get('doctors/all', 'Doctors');
            Route::get('doctors/today', 'doctor_today');
            Route::get('doctors/month', 'doctor_month');
            Route::get('doctors/year', 'doctor_year');
        });
        Route::controller(labsDataController::class )->group(function(){
            Route::get('labs', 'index');
            Route::get('labs/all', 'Labs');
            Route::get('labs/today', 'lab_today');
            Route::get('labs/month', 'lab_month');
            Route::get('labs/year', 'lab_year');
        });
        Route::controller(newsDataController::class )->group(function(){
            Route::get('news', 'index');
            Route::get('news/all', 'News');
            Route::get('news/today', 'new_today');
            Route::get('news/month', 'new_month');
            Route::get('news/year', 'new_year');
        });
        Route::controller(NewUsersDataController::class )->group(function(){
            Route::get('new_users', 'index');
            Route::get('new_users/all', 'new_users');
            Route::get('new_users/today', 'new_user_today');
            Route::get('new_users/month', 'new_user_month');
            Route::get('new_users/year', 'new_user_year');
            Route::get('/lastYear_new_user', 'lastyear_new_user');
        });
        Route::controller(OrderCoordinatorsDataController::class )->group(function(){
            Route::get('order_cordinators', 'index');
            Route::get('order_cordinators/all', 'order_cordinators');
            Route::get('order_cordinators/today', 'order_cordinator_today');
            Route::get('order_cordinators/month', 'order_cordinator_month');
            Route::get('order_cordinators/year', 'order_cordinator_year');
        });
        Route::controller(ProductsDataController::class )->group(function(){
            Route::get('products', 'index');
            Route::get('products/all', 'products');
            Route::get('products/today', 'product_today');
            Route::get('products/month', 'product_month');
            Route::get('products/year', 'product_year');
        });
        Route::controller(UsersDataController::class )->group(function(){
            Route::get('users', 'index');
            Route::get('users/all', 'users');
            Route::get('users/today', 'user_today');
            Route::get('users/month', 'user_month');
            Route::get('users/year', 'user_year');
            Route::get('/lastYear_users', 'lastyear_users');
        });

        Route::controller(LiveSessionsDataController::class )->group(function(){
            Route::get('sessions', 'index');
            Route::get('sessions/all', 'sessions');
            Route::get('sessions/today', 'session_today');
            Route::get('sessions/month', 'session_month');
            Route::get('sessions/year', 'session_year');
        });
        Route::controller(OrdersDataController::class)->group(function(){
            Route::get('/total','total_money');

            Route::get('/Canceled','Canceled');
            Route::get('/Canceled/all','Canceled_Orders');
            Route::get('/Canceled/today','Canceled_order_today');
            Route::get('/Canceled/month','Canceled_order_month');
            Route::get('/Canceled/year','Canceled_order_year');

            Route::get('/Delivered','Delivered');
            Route::get('/Delivered/all','Delivered_Orders');
            Route::get('/Delivered/today','Delivered_order_today');
            Route::get('/Delivered/month','Delivered_order_month');
            Route::get('/Delivered/year','Delivered_order_year');

            Route::get('/orders','index');
            Route::get('/orders/all','Orders');
            Route::get('/orders/today','order_today');
            Route::get('/orders/month','order_month');
            Route::get('/orders/year','order_year');

            Route::get('/NotDelivereds','NotDelivered');
            Route::get('/NotDelivereds/all','NotDelivered_Orders');
            Route::get('/NotDelivereds/today','NotDelivered_order_today');
            Route::get('/NotDelivereds/month','NotDelivered_order_month');
            Route::get('/NotDelivereds/year','NotDelivered_order_year');

            Route::get('/topOrder','topOrders');
            Route::get('/topSales','topSales');
            Route::get('/topCanceled','topcanceled');
             Route::get('/lastYear_sales','lastyear_sales');
            Route::get('/lastYear_orders','lastyear_orders');
            
            Route::get('/topPending','topPending');
        });


    });
});
