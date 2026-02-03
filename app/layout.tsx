import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { vremenaGrotesk } from '@/app/fonts/fonts';
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Varkala Store",
  description: "A mordern e-commerce store built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vremenaGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
