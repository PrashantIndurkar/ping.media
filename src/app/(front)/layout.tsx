import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "../globals.css";
import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  HomeIcon,
  Menu,
  MessageCircle,
  Search,
  UserRoundSearch,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ThemeToggleBtn from "@/components/common/ThemeToggleBtn";
import Image from "next/image";

import MobileSidebar from "@/components/common/MobileSidebar";

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
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="flex h-screen">
          {/* left sidebar */}
          <div className="hidden border-r md:block">
            <div className="flex h-full max-h-screen flex-col gap-2  w-64">
              <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Image
                    src="/images/PingLogo.png"
                    width={100}
                    height={100}
                    alt="Ping Logo"
                  />
                </Link>
              </div>
              <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                  <Link
                    href="/"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <HomeIcon className="h-4 w-4" />
                    Scroll
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Inbox
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 my-2 text-primary transition-all hover:text-primary"
                  >
                    <BriefcaseBusiness className="h-4 w-4" />
                    Jobs
                  </Link>
                  <Link
                    href="/search"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Search className="h-4 w-4" />
                    Search
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <UserRoundSearch className="h-4 w-4" />
                    My Network
                  </Link>
                  <Link
                    href="/notifications"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Bell className="h-4 w-4" />
                    Notifications
                    <Badge
                      variant="outline"
                      className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    >
                      6
                    </Badge>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Bookmark className="h-4 w-4" />
                    Bookmarks
                  </Link>
                </nav>
              </div>
              <div className="mt-auto p-4">
                <ThemeToggleBtn />
              </div>
            </div>
          </div>
          {/* main content */}
          <div className="flex-1 flex flex-col border-r">
            <section className="flex-1 overflow-y-auto hide-scrollbar ">
              {children}
            </section>
          </div>
          {/* right sidebar */}
          <div className="hidden md:block">Top picks</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
