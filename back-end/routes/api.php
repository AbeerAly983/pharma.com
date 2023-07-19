<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\LabController;
use App\Http\Controllers\newsController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductDoseController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ChangeEmail;
use App\Http\Controllers\User\ChangePasswordConroller;
use App\Http\Controllers\User\emailVerificationController;
use App\Http\Controllers\User\forgotPasswordController;
use App\Http\Controllers\User\resetPasswordController;
use App\Http\Controllers\User\UpdateUserProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SessionController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::get('/edit', [UpdateUserProfileController::class, 'edit']);
    Route::post('/update', [UpdateUserProfileController::class, 'update']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::post('/change_password/{id}', [ChangePasswordConroller::class, 'change_password']);
    Route::post('/sendmail', [ChangeEmail::class, 'changeEmail']);
});
Route::post('/resesndEmail', [emailVerificationController:: class, 'resesnd_email']);
Route::post('/emailVerification', [emailVerificationController:: class, 'email_verification']);
Route::post('/forgotPassword', [forgotPasswordController::class, 'forgot_password']);
Route::post('/resetPassword',[resetPasswordController::class, 'reset_password']);

Route::resource('/products',ProductController::class);
Route::get('/reorder',[ProductController::class,'reorder']);
Route::get('/expire',[ProductController::class,'expire']);
Route::get('/products/show/{id}', [ProductController::class, 'show']);
Route::get('/newProducts',[ProductController::class , 'newProducts']);
Route::post('/products/search', [ProductController::class, 'search_for_products']);
Route::resource('/discounts',DiscountController::class);
Route::get('/maxDiscounts',[DiscountController::class,'select_max_discount']);
Route::get('/types', [TypeController::class, 'index']);
Route::get('/showProductsByType/{id}', [TypeController::class, 'show_products_by_type']);
Route::resource('/announcements', AnnouncementController::class);

Route::controller(DoctorController::class)->group(function() {

    Route::get('/doctors','index');
    Route::get('/doctors/show/{id}' ,'show');

});
Route::controller(LabController::class)->group(function() {

    Route::get('/labs','index');
    Route::get('/labs/show/{id}' ,'show');

});
Route::controller(FeedbackController::class)->group(function() {

    Route::post('/feedbacks','store')->middleware('auth:api');
    Route::get('/feedbacks/show','show');

});

Route::controller(CartController::class)->group(function() {

    Route::get('/cart','my_cart');
    Route::post('/cart/add/{id}','add_to_cart');
    Route::get('/cart/delete/{id}','delete');
    Route::get('/cart/delete','delete_all');
    Route::post('/cart/increase/{id}','increase');
    Route::post('/cart/decrease/{id}','decrease');
    Route::get('/cart/address','address');


});


Route::middleware('auth:api')->group(function(){
    Route::post('/addOrder', [OrderController::class, 'create']);
    Route::get('/showOrders', [OrderController::class, 'index']);
    Route::get('/showPendingOrders', [OrderController::class, 'show_pending_order']);
    Route::get('/showOneOrder/{id}', [OrderController::class, 'show']);
    Route::get('/showTotalPrice', [OrderController::class, 'show_total_price']);
    Route::get('/showShipped',[OrderController::class, 'show_shipped'] );

});

Route::controller(newsController::class)->group(function() {

    Route::get('/news','index');
    Route::get('/news/show/{id}' ,'show');

});


Route::post('/new_email_verification', [emailVerificationController:: class, 'new_email_verification']);

Route::controller(ProductDoseController::class)->group(function(){
    Route::get('showDose/{age}/{weight}/{product_id}', 'show');
    Route::get('showProductDose', 'index');
});
Route::controller(FavoriteController::class)->group(function() {

    Route::get('/favorite','my_favorite');
    Route::post('/favorite/add/{id}','add_to_favorite');
    Route::get('/favorite/delete/{id}','delete');



});
Route::controller(SessionController::class)->group(function() {

    Route::get('/session','index');
    Route::get('/session/show/{id}' ,'show');
    Route::post('/session/addComment/{id}' ,'AddComment')->middleware('auth:api');
    Route::get('/session/ShowComment/{id}' ,'ShowComment')->middleware('auth:api');


});


require __DIR__.'/admin.php';
require __DIR__.'/owner.php';
require __DIR__.'/accountant.php';
require __DIR__.'/orderCordinator.php';
