import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Home · Ping Media",
  description:
    "Social media as it should be. Find your community among millions of users, unleash your creativity, and have some fun again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
