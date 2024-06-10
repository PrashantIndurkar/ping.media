import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "../globals.css";
import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  Dot,
  HomeIcon,
  MessageCircle,
  Plus,
  Search,
  UserRoundSearch,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ThemeToggleBtn from "@/components/common/ThemeToggleBtn";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CreatePost from "@/components/ping/CreatePost";
import { AlertDialogLogout } from "@/components/common/AlertDialogLogout";

import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

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
      <div className="xl:max-w-[85rem] mx-auto overflow-hidden">
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
                    href="/messages"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Messages
                  </Link>
                  <Link
                    href="/jobs"
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
                    href="/my-network"
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
                      className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full "
                    >
                      6
                    </Badge>
                  </Link>
                  <Link
                    href="/bookmarks"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Bookmark className="h-4 w-4" />
                    Bookmarks
                  </Link>

                  <Link
                    href="/profile"
                    className="flex mt-8 items-center gap-3 rounded-lg px-3 py-2 my-2 text-zinc-700 dark:text-zinc-300 font-bold text-lg transition-all hover:text-primary hover:gap-4"
                  >
                    <Avatar className="h-7 w-7 ">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Prashant
                  </Link>
                </nav>
              </div>
              <div className="mt-auto p-4 space-y-8">
                <ThemeToggleBtn />
                <div className="text-xs text-zinc-400 font-medium">
                  <span>Blog</span> <Dot className="inline text-gray-600" />
                  <span>Support</span> <Dot className="inline text-gray-600" />
                  <span>Help</span> <Dot className="inline text-gray-600" />
                  <span>T&C</span> <Dot className="inline text-gray-600" />{" "}
                  <span>Code of Conduct</span>{" "}
                  <Dot className="inline text-gray-600" />
                  <span>Privacy</span>
                </div>
              </div>
            </div>
          </div>
          {/* main content */}
          <div className="flex-1 flex flex-col">
            <section className="flex-1 overflow-y-auto hide-scrollbar ">
              {children}
            </section>
          </div>
          {/* right sidebar */}
          <div className="hidden xl:block border-l pl-6">
            {/* Catalog  */}
            {/* Top picks */}
            {/* Your bookmarks */}
            {/* Treading Posts / Treading Jobs */}
            {/* Pined things show here */}

            {/* User Profile  */}
            <section className="mt-4 space-y-8">
              <Card className="rounded-2xl flex items-center gap-4 px-3 py-2.5 my-2 transition-all hover:text-primary ">
                <Link href="/profile">
                  <div className="flex gap-2 items-center">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="space-y-1">
                      <span className="text-zinc-700 dark:text-zinc-300 font-bold text-sm block">
                        @prashantindurkar
                      </span>
                      <span className="block text-sm dark:text-zinc-400 text-zinc-500">
                        Prashant Indurkar
                      </span>
                    </div>
                  </div>
                </Link>
                <AlertDialogLogout />
              </Card>

              <Card className="rounded-2xl">
                <CardHeader className="flex flex-row items-center space-y-0 p-6 gap-x-3">
                  <div className="flex items-center">
                    <div className="relative inline-flex">
                      <div className="w-2.5 h-2.5 bg-pink-500 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-pink-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                      <div className="w-2.5 h-2.5 bg-pink-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
                    </div>
                  </div>
                  <h2 className="font-semibold text-zinc-700 dark:text-zinc-300">
                    Active on Ping
                  </h2>
                </CardHeader>
              </Card>
            </section>

            <CreatePost button />
          </div>
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
