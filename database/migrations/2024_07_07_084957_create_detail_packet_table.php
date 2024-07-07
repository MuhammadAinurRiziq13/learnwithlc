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
        Schema::create('detail_packet', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('packet_id')->index();
            $table->string('lesson_id', 32)->index();
            $table->timestamps();

            $table->foreign('packet_id')->references('id')->on('packets')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreign('lesson_id')->references('id')->on('lessons')
                ->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('detail_packet', function (Blueprint $table) {
            $table->dropForeign('detail_packet_packet_id_foreign');
            $table->dropForeign('detail_packet_lesson_id_foreign');
        });

        Schema::dropIfExists('detail_packet');
    }
};
