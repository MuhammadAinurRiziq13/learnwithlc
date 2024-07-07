<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\PostCategory;
use App\Models\PostComment;
use App\Models\PostCommentReply;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    public static $post_categories = [
        'science' => 'red',
        'economy' => 'green',
        'sosial' => 'orange'
    ];

    public function run(): void
    {
        foreach (self::$post_categories as $category => $color) {
            $post_category = PostCategory::updateOrCreate([
                'id' => Str::random(32),
                'name' => $category,
                'color' => $color,
                'created_at' => now()
            ]);

            $post_user = User::inRandomOrder()->first();

            $post = Post::factory()->create([
                'user_id' => $post_user->id,
                'category_id' => $post_category->id
            ]);

            $commentator = User::inRandomOrder()->limit(2)->get();

            foreach ($commentator as $user) {
                PostComment::factory()->create([
                    'user_id' => $user->id,
                    'post_id' =>  $post->id
                ]);
            }

            $post_comment = PostComment::where(['user_id' => $commentator[0]->id])->first();
            $replier = User::inRandomOrder()->first();

            PostCommentReply::factory()->create([
                'comment_id' => $post_comment->id,
                'user_id' => $replier->id
            ]);
        }
    }
}
