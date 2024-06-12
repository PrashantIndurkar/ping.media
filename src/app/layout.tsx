import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomProvider from "./CustomProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ping",
  description:
    "Open-source social and job hunting platform for developers and designers to rekindle the fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* wrapping the whole app in a session provider to get the session */}
        <CustomProvider>
          <header className="w-full bg-orange-400 text-white text-center p-1 text-xs">
            🔴 Application in development. Please note that some features are
            currently in progress.
          </header>
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}
