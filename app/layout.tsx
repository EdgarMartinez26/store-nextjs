import type { Metadata } from "next";
import { Inter, Big_Shoulders_Stencil } from "next/font/google";
import { vremenaGrotesk } from "@/app/fonts/fonts";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bigShoulders = Big_Shoulders_Stencil({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "Varkala Store",
  description: "A modern e-commerce store built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${vremenaGrotesk.variable} ${bigShoulders.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
