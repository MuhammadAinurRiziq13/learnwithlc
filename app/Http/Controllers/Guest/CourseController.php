<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        $lessons = Lesson::orderByDesc('amount_registered_user')->get();

        return Inertia::render('Guest/Courses', [
            'canLogin' => Route::has('login'),
            'lessons' => $lessons
        ]);
    }
}
