'use client';

import Link from "next/link";
import { motion } from "motion/react";
import SocialIcons from "./SocialIcons";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/motion/animation";
function Footer() {
  return (
    <footer className="border-t border-neutral-900">
      {/* Top section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container py-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-5"
      >
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold uppercase mb-4">
            Varkala
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full ml-1" />
          </h2>
          <p className="text-neutral-400 mb-6">
            Premium products, crafted for modern living.
          </p>

          {/* Newsletter */}
          <Button variant="outline">Subscribe to Newsletter</Button>
        </div>

        {/* Shop */}
        <div>
          <p className="font-semibold mb-4">Shop</p>
          <ul className="space-y-3 text-neutral-400">
            <li><Link href="/shop">All Products</Link></li>
            <li><Link href="/categories/new">New Arrivals</Link></li>
            <li><Link href="/categories/bestsellers">Best Sellers</Link></li>
            <li><Link href="/categories/sale">Sale</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="font-semibold mb-4">Company</p>
          <ul className="space-y-3 text-neutral-400">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="font-semibold mb-4">Support</p>
          <ul className="space-y-3 text-neutral-400">
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/shipping">Shipping & Returns</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="font-semibold mb-4">Legal</p>
          <ul className="space-y-3 text-neutral-400">
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom section */}
      <div className="border-t border-neutral-900">
        <div className="container py-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <SocialIcons />

          <p className="text-neutral-400 text-sm text-center">
            © {new Date().getFullYear()} Varkala Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
