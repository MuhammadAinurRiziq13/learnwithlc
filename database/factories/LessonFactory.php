<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lesson>
 */
class LessonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => Str::random(32),
            'name' => fake()->safeColorName(),
            'description' => fake()->sentence(),
            'targeted_class' => fake()->numberBetween(10, 12),
            'amount_chapter' => fake()->randomNumber(1),
            'amount_registered_user' => fake()->randomNumber(2),
            'created_at' => now()
        ];
    }
}
