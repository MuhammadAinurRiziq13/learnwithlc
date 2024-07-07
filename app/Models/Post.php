<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;

    /**
     * Define Tablename.
     * 
     * @var string
     */
    protected $table = 'posts';

    /**
     * Define the ability for primary key cannot to incrementing.
     * 
     * @var string
     */
    public $incrementing = false;

    /**
     * Define the key type for the primary key to string.
     * 
     * @var string
     */
    protected $keyType = 'string';

    /**
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'user_id',
        'category_id',
        'title',
        'content',
        'status'
    ];

    public function comments(): HasMany
    {
        return $this->hasMany(PostComment::class, 'post_id', 'id');
    }

    public function files(): HasMany
    {
        return $this->hasMany(PostFile::class, 'post_id', 'id');
    }
}
