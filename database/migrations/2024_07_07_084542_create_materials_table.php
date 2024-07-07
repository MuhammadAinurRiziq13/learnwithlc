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
        Schema::create('materials', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('lesson_sub_chapter_id')->index();
            $table->string('title');
            $table->text('description');
            $table->enum('material_type', ['image', 'video', 'document']);
            $table->text('material_path');
            $table->timestamps();

            $table->foreign('lesson_sub_chapter_id')->references('id')->on('lesson_sub_chapter')
                ->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('materials', function (Blueprint $table) {
            $table->dropForeign('materials_lesson_sub_chapter_id_foreign');
        });

        Schema::dropIfExists('materials');
    }
};
