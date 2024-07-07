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
        Schema::create('lesson_chapter', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('lesson_id', 32)->index();
            $table->string('title');
            $table->text('description');
            $table->timestamps();

            $table->foreign('lesson_id')->references('id')->on('lessons')
                ->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lesson_chapter', function (Blueprint $table) {
            $table->dropForeign('lesson_chapter_lesson_id_foreign');
        });

        Schema::dropIfExists('lesson_chapter');
    }
};
