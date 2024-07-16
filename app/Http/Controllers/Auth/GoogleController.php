<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Level;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class GoogleController extends Controller
{
    public function login()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback()
    {
        try {
            $google_user = Socialite::driver('google')->user();

            $user = User::where('email', $google_user->email)->first();

            if ($user) {
                Auth::login($user, true);

                if (Auth::check()) {
                    return redirect()->route('dashboard');
                } else {
                    return redirect()->route('login');
                }
            } else {
                $public_level = Level::where('name', 'Publik')->first();

                $new_user = User::updateOrCreate([
                    'id' => Str::uuid(),
                    'level_id' => $public_level->id,
                    'username' => strtolower(trim($google_user->user["name"])),
                    'firstname' => $google_user->user["given_name"],
                    'lastname' => $google_user->user["family_name"],
                    'email' => $google_user->user["email"],
                    'email_verified_at' => now(),
                    'photo' => $google_user->avatar,
                    'created_at' => now()
                ]);

                Auth::login($new_user, true);

                if (Auth::check()) {
                    return redirect()->route('dashboard');
                } else {
                    return redirect()->route('login');
                }
            }
        } catch (\Throwable $th) {
            // abort(404);
            dd($th->getMessage());
        }
    }
}
