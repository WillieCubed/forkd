import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import clsx from 'clsx';
import SiteHeader from '@/components/SiteHeader';

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
});

const frauncesFont = Fraunces({
  subsets: ["latin"],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: "Forkd",
  description: "It's GitHub, but for recipes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(
        "bg-surface-container text-on-surface-container font-sans",
        frauncesFont.variable,
        inter.variable,
      )}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
