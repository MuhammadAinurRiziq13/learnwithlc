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
        Schema::create('post_comment_replies', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('comment_id')->index();
            $table->uuid('user_id')->index();
            $table->text('reply');
            $table->timestamps();

            $table->foreign('comment_id')->references('id')->on('post_comments')
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
        Schema::table('post_comment_replies', function (Blueprint $table) {
            $table->dropForeign('post_comment_replies_comment_id_foreign');
            $table->dropForeign('post_comment_replies_user_id_foreign');
        });

        Schema::dropIfExists('post_comment_replies');
    }
};
