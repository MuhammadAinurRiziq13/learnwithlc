import { useState, useEffect, FormEventHandler } from 'react';
import InputError from '@/Components/Forms/InputError';
import InputLabel from '@/Components/Forms/InputLabel';
import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import TextInput from '@/Components/Forms/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import UauthenticatedLayout from '@/Layouts/UanuthenticatedLayout';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import useShowPassword from '@/Hooks/useShowPassword';
import SecondaryButton from '@/Components/Buttons/SecondaryButton';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const {
        showPassword,
        onFocusPassword,
        handleShowPassword,
        handleOnFocusPassword
    } = useShowPassword();

    const {
        showPassword: showConfirmPassword,
        onFocusPassword: onFocusConfirmPassword,
        handleShowPassword: handleShowConfirmPassword,
        handleOnFocusPassword: handleOnFocusConfirmPassword
    } = useShowPassword();

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <UauthenticatedLayout>
            <Head title="Register" />

            <form onSubmit={submit} className='px-2 sm:px-8 md:px-12 lg:px-16'>
                <div className='text-center'>
                    <h2 className='text-2xl font-extrabold'>Register</h2>
                    <p>Daftar Sekarang dengan Email Aktif untuk Mulai Belajar</p>
                </div>

                <div className='mt-5'>
                    <InputLabel htmlFor="username" value="Username" />

                    <TextInput
                        id="username"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full px-6 py-3"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('username', e.target.value)}
                        required
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Alamat Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full px-6 py-3"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 relative">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full px-6 py-3"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        onFocus={() => handleOnFocusPassword(true)}
                        onBlur={() => handleOnFocusPassword(false)}
                        required
                    />

                    {
                        onFocusPassword && (
                            <button
                                type="button"
                                className="absolute inset-y-0 top-5 right-0 px-3 py-2"
                                onClick={() => handleShowPassword()}
                                onMouseDown={(e) => e.preventDefault()}
                            >
                                {showPassword ? (
                                    <FaRegEye />
                                ) : (
                                    <FaRegEyeSlash />
                                )}
                            </button>
                        )
                    }

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 relative">
                    <InputLabel htmlFor="password_confirmation" value="Konfirmasi Ulang Password" />

                    <TextInput
                        id="password_confirmation"
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full px-6 py-3"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        onFocus={() => handleOnFocusConfirmPassword(true)}
                        onBlur={() => handleOnFocusConfirmPassword(false)}
                        required
                    />

                    {
                        onFocusConfirmPassword && (
                            <button
                                type="button"
                                className="absolute inset-y-0 top-5 right-0 px-3 py-2"
                                onClick={() => handleShowConfirmPassword()}
                                onMouseDown={(e) => e.preventDefault()}
                            >
                                {showConfirmPassword ? (
                                    <FaRegEye />
                                ) : (
                                    <FaRegEyeSlash />
                                )}
                            </button>
                        )
                    }

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex flex-col items-center justify-end mt-8 gap-6">
                    <PrimaryButton className="w-full justify-center" disabled={processing}>
                        Register
                    </PrimaryButton>

                    <span>Atau</span>

                    <SecondaryButton className='w-full justify-center gap-2'>
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="-3 0 262 262"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid">
                            <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" />
                        </svg>
                        Daftar dengan Google
                    </SecondaryButton>
                </div>

                <div className='flex justify-center mt-4'>
                    Sudah punya Akun?
                    <Link
                        href={route('login')}
                        className="underline text-sm ms-1 font-bold text-blue-700 hover:text-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login Sekarang
                    </Link>
                </div>
            </form>
        </UauthenticatedLayout>
    );
}
