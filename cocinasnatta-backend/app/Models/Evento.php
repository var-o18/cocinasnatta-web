<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Proveedor;

class Evento extends Model
{
    protected $table = 'eventos';

    protected $fillable = [
        'title',
        'start',
        'end',
        'color',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function proveedores()
    {
        return $this->belongsToMany(Proveedor::class, 'evento_proveedor');
    }
}