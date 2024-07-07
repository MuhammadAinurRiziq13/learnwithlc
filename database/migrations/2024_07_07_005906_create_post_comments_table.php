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
        Schema::create('post_comments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('post_id')->index();
            $table->uuid('user_id')->index();
            $table->text('comment');
            $table->timestamps();

            $table->foreign('post_id')->references('id')->on('posts')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreign('user_id')->references('id')->on('users')
                ->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('post_comments', function (Blueprint $table) {
            $table->dropForeign('post_comments_post_id_foreign');
            $table->dropForeign('post_comments_user_id_foreign');
        });

        Schema::dropIfExists('post_comments');
    }
};
