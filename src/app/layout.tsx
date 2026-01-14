import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { DotBackgroundDemo } from "@/components/ui/dot-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Krishna Devkota | Frontend Developer",
  description: "Krishna Devkota | Frontend Developer",
  icons: {
    icon: [{ url: "/me.png" }],
  },
  openGraph: {
      title: "Krishna Devkota | Frontend Developer",
      description: "Frontend Developer specializing in React, Next.js, and modern web technologies. Crafting engaging and user-friendly web experiences.",
      url: "https://krishdeeves.com",
      images: [
        {
          url: "/me.png",
          width: 1200,
          height: 630,
          alt: "Krishna Devkota | Frontend Developer",
        },
      ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <div className="absolute inset-0 -z-10 w-full h-full -mt-12 opacity-10 ">
          <DotBackgroundDemo />
        </div>
        <Header/>
        {children}
      </body>
    </html>
  );
}
