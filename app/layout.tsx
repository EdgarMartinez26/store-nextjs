import type { Metadata } from "next";
import { Inter, Big_Shoulders_Stencil } from "next/font/google";
import { vremenaGrotesk } from "@/app/fonts/fonts";
import { Toaster } from "@/components/ui/sonner"

import "./globals.css";

// const inter = Inter({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const bigShoulders = Big_Shoulders_Stencil({
  subsets: ["latin"],
  weight: ["400"], 
  display: "swap", 
  variable: "--font-logo",
  adjustFontFallback: false, 
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
      <body className={`${vremenaGrotesk.variable} ${bigShoulders.variable} antialiased`}>
        {children}
         <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(255, 255, 255, 0.85)", // transparent white
              color: "#000", // black text
              border: "1px solid #000", // black border
              backdropFilter: "blur(1px)", // glass effect (optional but nice)
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            },
          }}
        />
      </body>
    </html>
  );
}
