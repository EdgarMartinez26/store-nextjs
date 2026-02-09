'use client';

import Link from 'next/link';

type UserMenuProps = {
  name: string;
  email: string;
  isAdmin?: boolean;
  onLogout: () => void;
};

export default function UserMenu({
  name,
  email,
  isAdmin,
  onLogout,
}: UserMenuProps) {
  return (
    <div className="relative group">
      {/* Trigger */}
      <button className="flex items-center focus:outline-none">
        <span className="text-gray-300 group-hover:text-white">👤</span>
      </button>

      {/* Dropdown */}
      <div className="
        absolute right-0 mt-3 w-56
        rounded-xl bg-neutral-900 border border-neutral-800
        shadow-xl
        opacity-0 scale-95 invisible
        transition-all duration-150
        group-hover:opacity-100
        group-hover:scale-100
        group-hover:visible
        z-50
      ">
        <div className="p-4 border-b border-neutral-800">
          <p className="font-medium text-white">{name}</p>
          <p className="text-sm text-gray-400">{email}</p>
        </div>

        <ul className="p-2 text-sm">
          <MenuItem href="/profile">Profile</MenuItem>
          <MenuItem href="/orders">Order History</MenuItem>
          {isAdmin && <MenuItem href="/admin">Admin</MenuItem>}
        </ul>

        <div className="border-t border-neutral-800 p-2">
          <button
            onClick={onLogout}
            className="
              w-full text-left px-3 py-2 rounded-md
              text-red-400 hover:text-red-300
              hover:bg-red-500/10
            "
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-neutral-800"
      >
        {children}
      </Link>
    </li>
  );
}
