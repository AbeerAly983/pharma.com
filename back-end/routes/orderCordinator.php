<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Order_cordinator\AuthController;
use App\Http\Controllers\Order_cordinator\emailVerificationController ;
use App\Http\Controllers\Order_cordinator\ForgotPasswordController;
use App\Http\Controllers\Order_cordinator\resetPasswordController;
use App\Http\Controllers\Order_cordinator\UpdateProfileController;
use App\Http\Controllers\Order_cordinator\OrderToOrderCordinatorController;

Route::prefix('orderCoordinator')->group(function(){

    Route::middleware('guest')->group(function(){
        Route::post('/login', [AuthController::class, 'login' ]);
        Route::post('/verifyEmail', [emailVerificationController::class, 'verify_email']);
        Route::post('/forgotPassword', [ForgotPasswordController::class, 'forgot_password']);
        Route::post('/resetPassword', [resetPasswordController::class, 'reset_password']);
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [AuthController::class, 'userProfile']);

    Route::middleware('auth:orderCoordinator')->group(function(){
        Route::controller(UpdateProfileController::class)->group(function(){
            Route::get('/editProfile', 'edit_userName');
            Route::post('/updateProfile', 'update_userName');
            Route::post('/updatePassword', 'update_password');
            Route::get('edit_email', 'edit_email');
            Route::post('update_email', 'update_email');
            Route::post('new_email_verification', 'new_email_verification');
        });

        Route::controller(OrderToOrderCordinatorController::class)->group(function(){
            Route::get('show_users', 'show_users');
            Route::get('show_orders/{user_id}', 'show_orders');
            Route::get('show_orders_left', 'show_orders_left');
            Route::get('show_orders_not_left', 'show_orders_not_left');
            Route::post('do_left_for_order/{id}', 'do_left_for_order');
            Route::post('do_shipped_for_orders', 'do_shipped_for_orders');
            Route::post('do_left_for_all_orders/{user_id}', 'do_left_for_all_orders');
        });

    });
});

Route::get('select/{userId}', [OrderToOrderCordinatorController::class, 'select_orderCordinator']);
