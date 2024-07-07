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
        Schema::create('posts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id')->index();
            $table->string('category_id', 32)->index();
            $table->string('title', 100);
            $table->text('content');
            $table->enum('status', ['open', 'closed'])->default('open');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreign('category_id')->references('id')->on('post_categories')
                ->cascadeOnUpdate()->cascadeOnDelete();
        });

        Schema::create('post_files', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('post_id')->index();
            $table->text('file_path');
            $table->timestamps();

            $table->foreign('post_id')->references('id')->on('posts')
                ->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropForeign('posts_user_id_foreign');
            $table->dropForeign('posts_category_id_foreign');
        });

        Schema::dropIfExists('posts');

        Schema::table('post_files', function (Blueprint $table) {
            $table->dropForeign('posts_post_id_foreign');
        });

        Schema::dropIfExists('post_files');
    }
};
