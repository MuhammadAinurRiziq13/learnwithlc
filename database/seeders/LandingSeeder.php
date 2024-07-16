<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\CompanyTestimony;
use App\Models\Facility;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class LandingSeeder extends Seeder
{
    public function run(): void
    {
        // Company description
        Company::create([
            'about' => 'Bimbingan dan Dukungan untuk Mewujudkan <span class="text-primary">Impian</span> Akademis dan Karier.',
            'description' => 'Mendukung Setiap Impian dengan Pembelajaran yang Berkualitas.'
        ]);

        // Facilities displayed on landing page data
        Facility::updateOrCreate([
            'id' => Str::random(32),
            'name' => 'Meja',
            'icon' => 'fa fa-table',
            'created_at' => now(),
        ]);

        Facility::updateOrCreate([
            'id' => Str::random(32),
            'name' => 'Kursi',
            'icon' => 'fa fa-chair',
            'created_at' => now(),
        ]);

        Facility::updateOrCreate([
            'id' => Str::random(32),
            'name' => 'Whiteboard',
            'icon' => 'fa fa-whiteboard',
            'created_at' => now()
        ]);

        User::whereHas('level', fn($query) => $query->where('name', 'Publik'))
            ->limit(5)->get()->each(fn($user) => CompanyTestimony::factory()->create([
                'user_id' => $user->id
            ]));
    }
}
