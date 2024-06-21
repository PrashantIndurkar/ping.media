import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/context/app";
import { CustomProvider } from "@/context/auth";

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
        <AppWrapper>
          <CustomProvider>{children}</CustomProvider>
        </AppWrapper>
      </body>
    </html>
  );
}
