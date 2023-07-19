<?php
use App\Http\Controllers\Accountant\AuthAccountantController;
use App\Http\Controllers\Accountant\emailVerificationController ;
use App\Http\Controllers\Accountant\ForgotPasswordController;
use App\Http\Controllers\Accountant\resetPasswordController;
use App\Http\Controllers\Accountant\UpdateProfileController;
use App\Http\Controllers\Accountant\DeliveredOrderController;

Route::prefix('accountant')->group(function(){
    Route::middleware('guest:accountant')->group(function(){
        Route::controller(AuthAccountantController::class)->group(function(){
            Route::post('login', 'login');
        });

        Route::post('/verifyEmail', [emailVerificationController::class, 'verify_email']);
        Route::post('/forgotPassword', [ForgotPasswordController::class, 'forgot_password']);
        Route::post('/resetPassword', [resetPasswordController::class, 'reset_password']);
    });

    Route::middleware('auth:accountant')->group(function(){
        Route::controller(AuthAccountantController::class )->group(function(){
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

        Route::controller(DeliveredOrderController::class)->group(function(){
            Route::get('/show_notDeliveredOrders' , 'show_notDeliveredOrders');
            Route::get('/show_deliveredOrders' , 'show_DeliveredOrders');
            Route::post('/making_order_delivered/{id}' , 'making_order_delivered');
            Route::post('/making_order_canceled/{id}' , 'making_order_canceled');
            Route::post('/canceled_forSomeQuantities/{id}' , 'makeing_canceled_forSomeQuantities');
        });



    });
});
