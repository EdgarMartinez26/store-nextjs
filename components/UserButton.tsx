'use client';

import { useSession } from 'next-auth/react';
import { signOutUser } from '@/lib/actions/user.actions';
import UserMenu from './UserMenu';
import Link from 'next/link';
import { User } from 'lucide-react';

export default function UserButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Link href="/sign-in">
        <User size={20} className="text-gray-300 hover:text-white" />
      </Link>
    );
  }

  return (
    <UserMenu
      name={session.user.name ?? 'User'}
      email={session.user.email ?? ''}
      isAdmin={session.user.role === 'admin'}
      onLogout={logout}
    />
  );
}
