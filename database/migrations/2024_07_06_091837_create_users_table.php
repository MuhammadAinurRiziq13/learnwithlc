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
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('level_id', 32)->index();
            $table->string('username', 50)->unique();
            $table->string('firstname', 50);
            $table->string('lastname', 50)->nullable();
            $table->string('email', 100)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->char('phone_number', 20)->unique()->nullable();
            $table->text('password')->nullable();
            $table->text('photo')->nullable();
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('level_id')->references('id')->on('levels')
                ->cascadeOnUpdate();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_levels_foreign');
        });
        Schema::dropIfExists('users');
        Schema::dropIfExists('passwords_reset');
        Schema::dropIfExists('sessions');
    }
};
