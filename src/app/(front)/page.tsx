import Link from "next/link";
import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  Dot,
  EllipsisVertical,
  Heart,
  Home as HomeIcon,
  Menu,
  MessageCircle,
  MessageSquare,
  Search,
  Share,
  UserRoundSearch,
} from "lucide-react";
import ThemeToggleBtn from "@/components/common/ThemeToggleBtn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="hidden border-r md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
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
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <HomeIcon className="h-4 w-4" />
                Feed
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Inbox
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <BriefcaseBusiness className="h-4 w-4" />
                Jobs
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Search className="h-4 w-4" />
                Search
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <UserRoundSearch className="h-4 w-4" />
                My Network
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Bell className="h-4 w-4" />
                Notification
                <Badge
                  variant="outline"
                  className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                >
                  6
                </Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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
      <div className="flex-1 flex flex-col  border-r">
        <section className="flex-1 overflow-y-auto hide-scrollbar ">
          <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 bg-white dark:bg-zinc-900 z-10 flex items-center ">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Image
                      src="/images/Logo.png"
                      width={30}
                      height={30}
                      alt="Ping Logo"
                    />
                    <span className="sr-only">Ping media</span>
                  </Link>

                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <HomeIcon className="h-5 w-5" />
                    Feed
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Inbox
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <BriefcaseBusiness className="h-5 w-5" />
                    Jobs
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Search className="h-5 w-5" />
                    Search
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <UserRoundSearch className="h-5 w-5" />
                    My Network
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  >
                    <Bell className="h-5 w-5" />
                    Notification
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      6
                    </Badge>
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Bookmark className="h-5 w-5" />
                    Bookmarks
                  </Link>
                </nav>

                <div className="mt-auto">
                  <div className="mt-auto p-4">
                    <ThemeToggleBtn />
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <h3 className="hidden md:block text-lg font-medium">Feed</h3>
            <Link
              href="/"
              className="md:hidden flex items-center gap-2 font-semibold mx-auto"
            >
              <Image
                src="/images/PingLogo.png"
                width={100}
                height={100}
                alt="Ping Logo"
              />
            </Link>
          </header>
          <div className="sticky top-0 justify-center w-full bg-zinc-50 dark:bg-zinc-900 py-4 flex items-center z-20 ">
            <div className="relative mx-10 w-full max-w-full">
              <Avatar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-8 w-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Input
                className="h-12 pl-14 rounded-full w-full focus-visible:ring-0 focus-visible:ring-offset-0"
                type="email"
                placeholder="Write your post here..."
              />
            </div>
          </div>
          <main>
            <Card className=" shadow-none rounded-none border-x-0 border-y border-zinc-200 dark:border-zinc-700">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center flex-row gap-x-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="profile image"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="">
                    <CardTitle className="text-md font-medium ">
                      Prashant Indurkar
                    </CardTitle>
                    <CardDescription className="space-x-1">
                      <Link href="#">@prashant</Link>
                      <Dot className="inline text-gray-600" />
                      <span>9m</span>
                    </CardDescription>
                  </div>
                </div>
                {/* Report button / Report Icon */}
                <EllipsisVertical className="h-5 w-5 text-gray-500" />
              </CardHeader>
              <CardContent className="-mt-2">
                {/* build separate component for the post content that has padding from left */}
                <div className=""></div>
                <p className="prose text-zinc-800 dark:text-zinc-300">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis officia ea quo iste rem ipsam voluptas hic voluptate
                  sapiente, autem quaerat cupiditate doloremque, dolorum labore
                  excepturi facilis debitis odio omnis?
                </p>
              </CardContent>
              <CardFooter className="flex-col">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-between gap-x-10">
                    <Heart className="h-5 w-5" />
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex items-center justify-between gap-10">
                    <Bookmark className="h-5 w-5" />
                    <Share className="h-5 w-5" />
                  </div>
                </div>
                <div className="relative mx-10 w-full max-w-full mt-6">
                  <Avatar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Input
                    className="h-12 pl-12 rounded-full w-full focus-visible:ring-0 focus-visible:ring-offset-0 bg-zinc-50 dark:bg-zinc-900"
                    type="email"
                    placeholder="Post your comment"
                  />
                </div>
              </CardFooter>
            </Card>
          </main>
        </section>
      </div>
      <div className="hidden md:block">Top picks</div>
    </div>
  );
}
