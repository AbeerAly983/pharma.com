<?php
use App\Http\Controllers\Admin\AuthAdminController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductDoseController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\LabController;
use App\Http\Controllers\newsController;
use App\Http\Controllers\Admin\AdminEmailVerificationController;
use App\Http\Controllers\Admin\resetPasswordController;
use App\Http\Controllers\Admin\ForgotPasswordController;
use App\Http\Controllers\Admin\UpdateAdminProfileController;
use App\Http\Controllers\Admin\AccountantController;
use App\Http\Controllers\Admin\OrderCordinatorController;

Route::prefix('admin')->group(function(){
    Route::middleware('guest:admin')->group(function($router){
        Route::post('/login', [AuthAdminController::class, 'login' ]);
        Route::post('/verifyEmail', [AdminEmailVerificationController::class, 'verify_email']);
        Route::post('/forgotPassword', [ForgotPasswordController::class, 'forgot_password']);
        Route::post('/resetPassword', [resetPasswordController::class, 'reset_password']);

    });

    Route::post('/logout', [AuthAdminController::class, 'logout']);
    Route::get('/profile', [AuthAdminController::class, 'userProfile']);

    Route::middleware('auth:admin')->group(function(){
        Route::controller(UpdateAdminProfileController::class)->group(function(){
            Route::get('/editUserName', 'edit_userName');
            Route::post('/updateUserName', 'update_userName');
            Route::post('/updatePassword', 'update_password');
            Route::get('edit_email', 'edit_email');
            Route::post('update_email', 'update_email');
            Route::post('new_email_verification', 'new_email_verification');
        });

        Route::controller(AccountantController::class)->group(function(){
            Route::post('addAccountant', 'add_accountant');
            Route::get('showAccountants', 'index');
            Route::post('disableAccountant/{accountant_id}', 'disable');
            Route::post('ableAccountant/{accountant_id}', 'able');
        });
        Route::controller(OrderCordinatorController::class)->group(function(){
            Route::post('addOrderCordinator', 'add_orderCordinator');
            Route::get('showOrderCordinators', 'index');
            Route::post('disableOrderCordinator/{id}', 'disable');
            Route::post('ableOrderCordinator/{id}', 'able');
        });

        Route::post('/products/store', [ProductController::class, 'store']);
        Route::get('/product/edit/{id}', [ProductController::class, 'edit']);
        Route::post('/products/update/{id}', [ProductController::class, 'update']);
        Route::get('/products/disable/{id}', [ProductController::class, 'disable']);
        Route::get('/products/disable', [ProductController::class, 'show_disable']);
        Route::get('/products/showAll', [ProductController::class, 'show_all_products']);

        Route::controller(DiscountController::class)->group(function(){
            Route::post('/discount/add/{product_id}','store');
            Route::get('/discount/edit/{product_id}',  'edit');
            Route::post('/discount/update/{product_id}',  'update');
            Route::get('/discount/delete/{product_id}', 'destroy');
        });

        Route::controller(AnnouncementController::class)->group(function(){
            Route::post('announcement/add', 'store');
            Route::get('announcement/edit/{id}', 'edit');
            Route::post('announcement/update/{id}', 'update');
            Route::get('announcement/delete/{id}', 'destroy');
        });

        Route::controller(TypeController::class)->group(function(){
            Route::post('type/add', 'store');
            Route::get('type/edit/{id}', 'edit');
            Route::post('type/update/{id}', 'update');
        });

        Route::controller(ProductDoseController::class)->prefix('dose')->group(function(){
            Route::post('/storeProduct', 'store_product');
            Route::post('/storeProductIndication/{product_id}', 'store_product_indication');
            Route::post('/storeProductDose/{indication_id}', 'store');
            Route::get('/products/indication', 'indication');

            Route::get('/show_productDose/{product_id}', 'show_productDose');
            Route::get('/edit_productCase/{id}', 'edit_productCase');
            Route::get('/edit_productIndication/{id}', 'edit_productIndication');
            Route::get('/edit_productDose/{id}', 'edit_productDose');
            Route::post('/update_productCase/{id}', 'update_productCase');
            Route::post('/update_productIndication/{id}', 'update_productIndication');
            Route::post('/update_productDose/{id}', 'update_productDose');
            Route::post('/destroy_productCase/{id}', 'destroy_productCase');
            Route::post('/destroy_productIndication/{id}', 'destroy_productIndication');
            Route::post('/destroy_productDose/{id}', 'destroy_productDose');
        });

        Route::controller(DoctorController::class)->group(function() {
            Route::post('/doctors/add', 'store');
            Route::get('/doctors/edit/{id}' ,'edit');
            Route::post('/doctors/update/{id}','update');
            Route::get('/doctors/delete/{id}','delete');
            Route::get('/doctors/showall', 'showall');
        });
        Route::controller(LabController::class)->group(function() {

            Route::post('/labs/add', 'store');
            Route::get('/labs/edit/{id}' ,'edit');
            Route::post('/labs/update/{id}','update');
            Route::get('/labs/delete/{id}','delete');
            Route::get('/labs/showall', 'showall');
        });
        Route::controller(newsController::class)->group(function() {

            Route::post('/news/add', 'store');
            Route::get('/news/edit/{id}' ,'edit');
            Route::post('/news/update/{id}','update');
            Route::get('/news/delete/{id}','delete');
            Route::get('/news/showall', 'showall');

        });
        Route::controller(SessionController::class)->group(function() {

            Route::get('/session','alldata');
            Route::post('/session/add' ,'store');
            Route::get('/session/disable/{id}' ,'disable');
            Route::get('/session/able/{id}' ,'able');
            Route::get('/session/show_disable' ,'show_disable');
            Route::post('/session/update/{id}' ,'update');
            Route::get('/session/edit/{id}' ,'edit');
            Route::get('/session/ShowComment/{id}' ,'ShowComment');

        });
    });

});

