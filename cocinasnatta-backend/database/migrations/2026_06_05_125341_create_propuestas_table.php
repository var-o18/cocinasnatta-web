<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('propuestas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('email');
            $table->string('telefono');
            $table->text('descripcion');
            $table->enum('estado', ['pendiente', 'en_curso', 'finalizado', 'cancelado'])->default('pendiente');
            $table->timestamps();
        });
        DB::statement('ALTER TABLE propuestas ADD archivo_pdf LONGBLOB AFTER descripcion');
    }

    public function down(): void
    {
        Schema::dropIfExists('propuestas');
    }
};
