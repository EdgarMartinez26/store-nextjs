'use client';

import { signOutUser } from "@/lib/actions/user.actions";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type Props = {
  name: string;
  email: string;
  role?: string;
};



export default function UserMenuClient({ name, email, role }: Props) {
  const router = useRouter();

  const initials = name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

    const handleLogout = async () => {
      signOutUser();
      router.refresh();
    }
    
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <div className="px-3 py-2 text-sm">
          <p className="font-medium">{name}</p>
          <p className="text-muted-foreground">{email}</p>
        </div>

        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>

        {role === "admin" && (
          <DropdownMenuItem asChild>
            <Link href="/admin">Admin</Link>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem
          onClick={() => handleLogout()}
          className="text-red-500"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
