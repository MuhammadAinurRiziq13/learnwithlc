<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => Str::uuid(),
            'title' => fake()->sentence(),
            'content' => fake()->paragraph(),
            'status' => 'open',
            'created_at' => now()
        ];
    }

    /**
     * Define model status when Post is closed
     * 
     * @return array<string, mixed>
     */
    public function is_closed(): array
    {
        return [
            'status' => 'closed'
        ];
    }
}
