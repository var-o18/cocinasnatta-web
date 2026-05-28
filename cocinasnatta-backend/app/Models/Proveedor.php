<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    protected $table = 'proveedores';

    protected $fillable = [
        'nombre_empresa',
        'nombre_contacto',
        'correo',
        'telefono',
        'direccion',
    ];

    public function eventos(){
        return $this->belongsToMany(Evento::class, 'evento_proveedor');
    }
}
