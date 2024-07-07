<?php

namespace Database\Seeders;

use App\Models\Lesson;
use App\Models\LessonChapter;
use App\Models\LessonSubChapter;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Lesson::factory(10)->create()->each(function ($lesson) {
            LessonChapter::factory(8)->create([
                'lesson_id' => $lesson->id,
            ])->each(function ($lesson_chapter) {
                LessonSubChapter::factory(5)->create([
                    'lesson_chapter_id' => $lesson_chapter->id
                ]);
            });
        });
    }
}
