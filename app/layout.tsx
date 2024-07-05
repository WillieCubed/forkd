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
  title: {
    template: "%s - Forkd",
    default: "Forkd",
  },
  description: "It's GitHub, but for recipes.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forkd.vercel.app",
    siteName: "Forkd",
    title: "Forkd",
    description: "It's GitHub, but for recipes.",
    images: [
      {
        url: "https://forkd.vercel.app/og-image.png",
        alt: "Forkd",
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
