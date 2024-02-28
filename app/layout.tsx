"use client";

// import { usePathname } from 'next/navigation';
import gsap from "gsap";
// import { ScrollSmoother } from 'gsap-trial/dist/ScrollSmoother';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Inter } from "next/font/google";
import { useGSAP } from "@gsap/react";

import Header from "@/components/Header";

import "./globals.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body className={inter.className}>
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content"></div>
        </div>
      </body>
    </html>
  );
}
