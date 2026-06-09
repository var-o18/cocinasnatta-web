<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Propuesta extends Model
{
    protected $fillable = [
        'nombre',
        'email',
        'telefono',
        'descripcion',
        'archivo_pdf',
        'estado'
    ];
        protected $hidden = [
        'archivo_pdf'
    ];
}
