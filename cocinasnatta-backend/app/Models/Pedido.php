<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $fillable = [
        'cliente_id',
        'nombre_cocina',
        'precio',
        'estado',
        'fecha_pedido'
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
}
