<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PostCommentReply extends Model
{
    use HasFactory;

    /**
     * Define Tablename.
     * 
     * @var string
     */
    protected $table = 'post_comment_replies';

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
        'comment_id',
        'user_id',
        'reply'
    ];

    public function comment(): BelongsTo
    {
        return $this->belongsTo(PostComment::class, 'comment_id', 'id');
    }

    public function replier(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
