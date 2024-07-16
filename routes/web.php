<?php

use App\Http\Controllers\Guest\CourseController;
use App\Http\Controllers\ProfileController;
use App\Models\Company;
use App\Models\CompanyTestimony;
use App\Models\Lesson;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/**  
 * Guest Routes  
 */
Route::get('/', function () {
    return Inertia::render('Guest/Welcome', [
        'canLogin' => Route::has('login'),
        'company' => Company::first(),
        'testimonials' => CompanyTestimony::with('testimoner')->limit(10)->get(),
        'popularLesson' => (new Lesson())->popular(),
    ]);
})->name('landing.page');
Route::get('/course', [CourseController::class, 'index'])->name('courses');
/**  
 * End Guest Routes  
 */

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
