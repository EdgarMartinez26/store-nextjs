'use client';

import { useState } from 'react';
import { useActionState } from 'react';
import UnderlineLink from '@/components/UnderLineLink';
import { signInWithCredentials } from '@/lib/actions/user.actions';
import { useSearchParams } from 'next/navigation';

export default function Login() {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: '',
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const [currentState, setCurrentState] =
    useState<'Login' | 'Sign Up'>('Login');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 sm:p-10 text-gray-700">
        
        {/* Title */}
        <div className="flex items-center gap-2 mb-6">
          <p className="prata-regular text-2xl sm:text-3xl">
            {currentState}
          </p>
          <hr className="h-[1.5px] w-8 bg-gray-800 border-none" />
        </div>

        {/* Form */}
        <form
          action={action}
          className="flex flex-col gap-4"
        >
          <input type='hidden' name='callbackUrl' value={callbackUrl}></input>
          {currentState === 'Sign Up' && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-3 py-2.5 border border-gray-800 rounded focus:outline-none"
            />
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-3 py-2.5 border border-gray-800 rounded focus:outline-none"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-3 py-2.5 border border-gray-800 rounded focus:outline-none"
          />

          {/* Links */}
          <div className="flex justify-between items-center mt-1">
            <UnderlineLink className="text-xs sm:text-sm">
              Forgot your password?
            </UnderlineLink>

            {currentState === 'Login' ? (
              <UnderlineLink
                onClick={() => setCurrentState('Sign Up')}
                className="text-xs sm:text-sm"
              >
                Create account
              </UnderlineLink>
            ) : (
              <UnderlineLink
                onClick={() => setCurrentState('Login')}
                className="text-xs sm:text-sm"
              >
                Login here
              </UnderlineLink>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="
              bg-black text-white font-light
              py-2.5 sm:py-3 mt-4
              rounded
              hover:bg-gray-900 transition
            "
          >
            {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
          </button>

          {/* Server message */}
          {data.message && (
            <p className="text-sm text-red-600 text-center">
              {data.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
