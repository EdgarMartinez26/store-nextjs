'use client';

import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import Menu from "./Menu";
import HeaderActions from "@/components/HeaderActions";
import UserButton from "../../UserMenu";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Shop", path: "/shop" },
    { id: 3, label: "About", path: "/about" },
    { id: 4, label: "Contact", path: "/contact" },
  ];

  const normalizePath = (path: string) =>
    path.endsWith("/") ? path : `${path}/`;

  return (
    <header className="border-b border-neutral-900">
      <div className="container flex items-center justify-between py-5 lg:pb-0">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-medium uppercase flex items-end gap-1"
        >
          Varkala
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mb-1" />
        </Link>

        {/* Mobile Menu */}
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-medium uppercase">Varkala</h3>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="rounded-full"
            >
              <RiCloseLine size={26} />
            </Button>
          </div>

          <ul className="grid">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="border-b border-neutral-900 text-center"
              >
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-5 transition-colors hover:bg-neutral-900 ${
                    normalizePath(pathname) === normalizePath(item.path)
                      ? "bg-neutral-900 font-medium"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Sign In */}
          <Button asChild className="mt-10 w-full">
            <Link href="/sign-in" onClick={() => setIsOpen(false)}>
              <span className="flex items-center justify-center gap-2">
                <User className="w-5 h-5" />
                Sign In
              </span>
            </Link>
          </Button>
        </nav>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center border border-neutral-800 rounded-t-2xl overflow-hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`px-8 py-5 block transition-colors hover:bg-neutral-900 ${
                  normalizePath(pathname) === normalizePath(item.path)
                    ? "bg-neutral-900 font-medium"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          
          <HeaderActions />
        </div>

        {/* Mobile Menu Icon */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <RiMenu3Line size={28} />
        </Button>

        {/* Overlay */}
        <div
          className={`overlay ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
