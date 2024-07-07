<?php

namespace Database\Seeders;

use App\Models\Level;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    public static $levels = [
        'Pelajar', 'Publik', 'Mentor', 'Admin'
    ];

    public function run(): void
    {
        foreach (self::$levels as $level) {
            $level_id = Str::random(32);

            Level::updateOrCreate([
                'id' => $level_id,
                'name' => $level,
                'created_at' => now()
            ]);

            User::factory(5)->create([
                'level_id' => $level_id
            ]);
        }
    }
}
