<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveredOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivered_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_left_id')->constrained('order_lefts');
            $table->foreignId('accountant_id')->constrained('accountants')->nullable();
            $table->integer('canceled_quantity')->nullable()->default(0);
            $table->integer('delivered_quantity')->nullable()->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('delivered_orders');
    }
}
