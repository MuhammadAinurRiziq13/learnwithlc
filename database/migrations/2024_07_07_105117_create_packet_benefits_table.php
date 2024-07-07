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
        Schema::create('packet_benefits', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('packet_id')->index();
            $table->string('benefit');
            $table->timestamps();

            $table->foreign('packet_id')->references('id')->on('packets')
                ->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('packet_benefits', function (Blueprint $table) {
            $table->dropForeign('packet_benefits_packet_id_foreign');
        });

        Schema::dropIfExists('packet_benefits');
    }
};
