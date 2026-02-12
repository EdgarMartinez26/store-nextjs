'use client';

import { useActionState } from 'react';
import { signInWithCredentials } from '@/lib/actions/user.actions';
import UnderlineLink from '@/components/UnderLineLink';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: '',
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6">
      
      {/* Glass Card */}
      <div className="
        w-full 
        max-w-md 
        bg-black/20 
        border border-white/10 
        rounded-xl 
        shadow-2xl 
        p-8 sm:p-10 
        text-white
      ">

        {/* Title */}
        <div className="flex items-center gap-3 mb-8">
          <p className="text-gray-200 prata-regular text-4xl tracking-wide">
            Sign In
          </p>
          <div className="h-[1px] w-10 bg-gray-200" />
        </div>

        <form action={action} className="flex flex-col gap-5">

          <input type="hidden" name="callbackUrl" value={callbackUrl} />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="
              w-full
              px-4 py-3
              bg-white/5
              border border-white/20
              rounded-md
              text-white
              placeholder-white/60
              focus:outline-none
              focus:border-white/60
              focus:bg-white/10
              transition-all
              duration-300
            "
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="
              w-full
              px-4 py-3
              bg-white/5
              border border-white/20
              rounded-md
              text-white
              placeholder-white/60
              focus:outline-none
              focus:border-white/60
              focus:bg-white/10
              transition-all
              duration-300
            "
          />

          {/* Links */}
          <div className="flex justify-between items-center text-sm mt-1 text-white/70">
            <UnderlineLink>
              Forgot your password?
            </UnderlineLink>

            <UnderlineLink>
              <Link href="/sign-up">Create account</Link>
            </UnderlineLink>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              mt-6
              bg-black
              border border-white/10
              text-white
              font-light
              tracking-wide
              py-3
              rounded-md
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
            "
          >
            Sign In
          </button>

          {data.message && (
            <p className="text-sm text-red-400 text-center mt-2">
              {data.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
