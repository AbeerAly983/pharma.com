<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeOldEmailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_old_emails', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id')->consrained('admins')->nullable();
            $table->foreignId('orderCoordinator_id')->consrained('order_cordinators')->nullable();
            $table->foreignId('accountant_id')->consrained('accountants')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
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
        Schema::dropIfExists('employee_old_emails');
    }
}
