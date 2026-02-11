'use client';

import { useActionState } from 'react';
import { signUpUser } from '@/lib/actions/user.actions';
import UnderlineLink from '@/components/UnderLineLink';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SignUp() {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: '',
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 sm:p-10 text-gray-700">

        {/* Title */}
        <div className="flex items-center gap-2 mb-6">
          <p className="prata-regular text-2xl sm:text-3xl">
            Create Account
          </p>
          <hr className="h-[1.5px] w-8 bg-gray-800 border-none" />
        </div>

        <form action={action} className="flex flex-col gap-4">
          <input type="hidden" name="callbackUrl" value={callbackUrl} />

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-3 py-2.5 border border-gray-800 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-3 py-2.5 border border-gray-800 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2.5 border border-gray-800 rounded"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="w-full px-3 py-2.5 border border-gray-800 rounded"
          />

          {/* Link BEFORE button */}
          <div className="text-sm mt-2 text-right">
            <div className='flex justify-between'>
                <p className='text-sm'>Already have an account?</p>
                <UnderlineLink> 
                <Link href="/sign-in">Sign In</Link>
                </UnderlineLink>
            </div>
          </div>

          <button
            type="submit"
            className="bg-black text-white font-light py-3 mt-4 rounded hover:bg-gray-900 transition"
          >
            Sign Up
          </button>

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
