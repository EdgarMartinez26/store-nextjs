'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { User, Heart, ShoppingCart, Menu as LucideMenu } from "lucide-react";
import { useState } from "react";
import UserButton from "./UserMenu";

export default function HeaderActions() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  

  return (
    <div className="flex items-center gap-3">
      {/* Wishlist */}
      <Link href="/wishlist">
        <Button variant="ghost" size="icon" className="p-2">
          <Heart size={22} />
        </Button>
      </Link>

      {/* Cart Sidebar */}
      <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="p-2">
            <ShoppingCart size={22} />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[350px]">
          <SheetTitle>Shopping Cart</SheetTitle>
          {/* Cart content */}
          <div className="mt-4">
            <p>Your cart is empty</p>
          </div>
        </SheetContent>
      </Sheet>

      {/* Burger Sidebar */}
      <Sheet open={isBurgerOpen} onOpenChange={setBurgerOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="p-2 lg:hidden">
            <LucideMenu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px]">
          <SheetTitle>Menu</SheetTitle>
          {/* Mobile menu links */}
          <ul className="mt-4 flex flex-col gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </SheetContent>
      </Sheet>

      {/* Sign In */}
      <UserButton />

    </div>
  );
}
