import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomProvider from "./CustomProvider";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggleBtn from "@/components/common/ThemeToggleBtn";
import NextTopLoader from "nextjs-toploader";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="#e45070" showSpinner={false} />
          <div className="absolute bottom-20 left-48 z-50 hidden md:block">
            <ThemeToggleBtn />
          </div>
          <CustomProvider>{children}</CustomProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
