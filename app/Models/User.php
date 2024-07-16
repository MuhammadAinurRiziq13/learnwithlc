<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * Define Tablename.
     * 
     * @var string
     */
    protected $table = 'users';

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
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'level_id',
        'username',
        'firstname',
        'lastname',
        'email',
        'email_verified_at',
        'phone_number',
        'password',
        'photo'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password'
    ];

    /**
     * Relationship with level
     * 
     * @return HasOne
     */
    public function level()
    {
        return $this->hasOne(Level::class, 'id', 'level_id');
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class, 'id', 'user_id');
    }

    public function post_comments(): HasMany
    {
        return $this->hasMany(PostComment::class, 'id', 'user_id');
    }

    public function post_comment_replies(): HasMany
    {
        return $this->hasMany(PostCommentReply::class, 'id', 'user_id');
    }
}
