<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoseOfProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dose_of_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('indication_id')->constrained('product_indications')->oncascadeDelete();
            $table->integer('min_age')->nullable();
            $table->integer('max_age')->nullable();
            $table->integer('min_weight')->nullable();
            $table->integer('max_weight')->nullable();
            $table->string('dose');
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
        Schema::dropIfExists('dose_of_products');
    }
}
