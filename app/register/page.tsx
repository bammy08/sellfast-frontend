'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Send,
  LayoutDashboard,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Link from 'next/link';
import { registerUser } from '@/store/slices/authSlice';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const result = await dispatch(registerUser(data));
    if (registerUser.fulfilled.match(result)) {
      router.push('/verify');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Send className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
              {/* <Money className="text-blue-500 h-7 w-7" /> */}
              <span>SellFast</span>
            </h1>
            <p className="text-gray-500 mt-3 font-light">
              Create your admin dashboard account
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-blue-400" />
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                      errors.firstName ? 'border-red-300' : 'border-gray-200'
                    } focus:ring-2 focus:ring-blue-300 focus:border-transparent transition`}
                    placeholder="John"
                    {...register('firstName', { required: 'Name is required' })}
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-blue-400" />
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    className={`w-full pl-10 px-4 py-2.5 rounded-lg border ${
                      errors.lastName ? 'border-red-300' : 'border-gray-200'
                    } focus:ring-2 focus:ring-blue-300 focus:border-transparent transition`}
                    placeholder="Doe"
                    {...register('lastName', { required: 'Name is required' })}
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                    errors.email ? 'border-red-300' : 'border-gray-200'
                  } focus:ring-2 focus:ring-blue-300 focus:border-transparent transition`}
                  placeholder="john@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-blue-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className={`w-full pl-10 pr-12 py-2.5 rounded-lg border ${
                    errors.password ? 'border-red-300' : 'border-gray-200'
                  } focus:ring-2 focus:ring-blue-300 focus:border-transparent transition`}
                  placeholder="••••••••"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-blue-500 transition" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-blue-500 transition" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* {error && (
              <div className="rounded-lg bg-red-50 p-3 border border-red-100">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )} */}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium transition-all duration-300 ${
                loading
                  ? 'opacity-80 cursor-not-allowed'
                  : 'shadow-md hover:shadow-lg'
              } flex items-center justify-center`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                <span className="flex items-center">
                  <LayoutDashboard className="h-5 w-5 mr-2" />
                  Create Dashboard Account
                </span>
              )}
            </button>
          </form>

          <div className="mt-6 text-center pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-medium text-blue-500 hover:text-blue-700 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
