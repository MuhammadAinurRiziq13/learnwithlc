<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LessonSubChapter extends Model
{
    use HasFactory;

    /**
     * Define Tablename.
     * 
     * @var string
     */
    protected $table = 'lesson_sub_chapter';

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
        'lesson_chapter_id',
        'title',
        'content'
    ];

    public function lesson_chapters(): BelongsTo
    {
        return $this->belongsTo(LessonChapter::class, 'lesson_chapter_id', 'id');
    }

    public function materials(): HasMany
    {
        return $this->hasMany(Material::class, 'lesson_sub_chapter_id', 'id');
    }
}
