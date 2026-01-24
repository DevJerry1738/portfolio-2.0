import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-primary",
  weight: ["500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JEREMIAH — SOFTWARE DEVELOPER & CONSULTANT",
  description: "Full-stack developer building clean, purposeful systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
