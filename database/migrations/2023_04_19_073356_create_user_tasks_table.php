<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_tasks', function (Blueprint $table) {
            $table->integer('id', 11);
            $table->integer('user_id', 11);
            $table->integer('task_id', 11);
            $table->timestamp('due_date');
            $table->timestamp('start_at');
            $table->timestamp('end_at');
            $table->string('remarks', 100);
            $table->integer('status_id', 12);
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
            $table->timestamp('deleted_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_tasks');
    }
};
