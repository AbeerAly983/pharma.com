<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderLeftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_lefts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_cordinator_id')->constrained('order_cordinators')->nullable();
            $table->foreignId('order_id')->constrained('orders');
            $table->boolean('left')->nullable()->default(false);
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
        Schema::dropIfExists('order_lefts');
    }
}
