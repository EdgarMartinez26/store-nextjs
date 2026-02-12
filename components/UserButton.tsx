"use client";

import Link from "next/link";
import { User } from "lucide-react";
import UserMenuClient from "./UserMenuClient";
import { useEffect, useState } from "react";

type SessionShape = {
  user?: {
    name?: string | null;
    email?: string | null;
    role?: string | null;
  } | null;
} | null;

export default function UserButton() {
  const [session, setSession] = useState<SessionShape>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    fetch("/api/session")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (mounted) setSession(data as SessionShape);
      })
      .catch(() => {
        if (mounted) setSession(null);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <User size={20} className="text-gray-300" />;
  }

  // Not logged in
  if (!session || !session.user) {
    return (
      <Link href="/sign-in">
        <User size={20} className="text-gray-600 hover:text-black" />
      </Link>
    );
  }

  // Logged in → pass data to client menu
  return (
    <UserMenuClient
      name={session.user.name ?? "User"}
      email={session.user.email ?? ""}
      role={session.user.role ?? undefined}
    />
  );
}
