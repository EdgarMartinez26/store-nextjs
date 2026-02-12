'use client';

import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import HeaderActions from "@/components/shared/header/HeaderActions";

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
    <header className="border-b border-gray-300  sm:p-4">
      <div className="container flex items-center justify-between py-5 lg:pb-0">
        {/* Logo */}
        <Link href="/" className="inline-block">
          <p className="font-logo text-black text-4xl uppercase flex font-medium items-center tracking-wider hover:dotMove">
            Varkala
            <span className="ml-2 w-2.5 h-2.5 rounded-full bg-blue-500 inline-block transition-transform"></span>
          </p>
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
        <ul className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive =
              normalizePath(pathname) === normalizePath(item.path);
            return (
              <li key={item.id} className="relative group">
                <Link
                  href={item.path}
                  className={`text-sm tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
          {item.label}
        </Link>

        {/* Animated underline */}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
            isActive
              ? "w-full"
              : "w-0 group-hover:w-full"
          }`}
        />
      </li>
    );
  })}
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
