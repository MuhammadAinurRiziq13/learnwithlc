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
        Schema::create('lesson_sub_chapter', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('lesson_chapter_id')->index();
            $table->string('title');
            $table->text('content');
            $table->timestamps();

            $table->foreign('lesson_chapter_id')->references('id')->on('lesson_chapter')
                ->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lesson_sub_chapter', function (Blueprint $table) {
            $table->dropForeign('lesson_sub_chapter_lesson_chapter_id_foreign');
        });

        Schema::dropIfExists('lesson_sub_chapter');
    }
};
