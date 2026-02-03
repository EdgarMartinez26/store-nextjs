'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu as LucideMenu, X } from "lucide-react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Shop", path: "/shop" },
    { id: 3, label: "About", path: "/about" },
    { id: 4, label: "Contact", path: "/contact" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden p-2">
          <LucideMenu size={24} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[280px] p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </Button>
        </div>

        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 rounded hover:bg-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
