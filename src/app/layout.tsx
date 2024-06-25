import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/context/app";
import { CustomProvider } from "@/context/auth";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

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
      <body className={`${inter.className} ${instrumentSerif.variable}`}>
        <AppWrapper>
          <CustomProvider>{children}</CustomProvider>
          <Toaster richColors />
        </AppWrapper>
      </body>
    </html>
  );
}
