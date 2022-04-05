<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Rorecek\Ulid\HasUlid;

class Blog extends Model
{
    use HasFactory;
    use HasUlid;
    
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        "title",
        "description",
        "contents",
    ];
}
