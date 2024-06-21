"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  Dot,
  HomeIcon,
  MessageCircle,
  Search,
  UserRoundSearch,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { CustomSession } from "@/app/api/auth/[...nextauth]/options";
import { usePathname } from "next/navigation";
import { getAvatarFallbackName } from "@/utils/avatar-fallback-name";

export const Sidebar = ({ session }: { session: CustomSession | null }) => {
  const pathname = usePathname();
  const [active, setActive] = useState<string>(pathname);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div className="hidden border-r md:block">
      <div className="flex h-full max-h-screen flex-col gap-2 w-64">
        <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
          <Link href="/feed" className="flex items-center gap-2 font-semibold">
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
              href="/feed"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary ${
                active === "/feed" ? "bg-muted text-primary" : ""
              }`}
            >
              <HomeIcon className="size-4" />
              Feed
            </Link>
            <Link
              href="/messages"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary ${
                active === "/messages" ? "bg-muted text-primary" : ""
              }`}
            >
              <MessageCircle className="size-4" />
              Messages
            </Link>
            <Link
              href="/jobs"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary ${
                active === "/jobs" ? "bg-muted text-primary" : ""
              }`}
            >
              <BriefcaseBusiness className="size-4" />
              Jobs
            </Link>
            <Link
              href="/explore"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary ${
                active === "/explore" ? "bg-muted text-primary" : ""
              }`}
            >
              <Search className="size-4" />
              Explore
            </Link>
            <Link
              href="/network"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary ${
                active === "/network" ? "bg-muted text-primary" : ""
              }`}
            >
              <UserRoundSearch className="size-4" />
              My Network
            </Link>
            <Link
              href="/notifications"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary ${
                active === "/notifications" ? "bg-muted text-primary" : ""
              }`}
            >
              <Bell className="size-4" />
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
              className={`flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary ${
                active === "/bookmarks" ? "bg-muted text-primary" : ""
              }`}
            >
              <Bookmark className="size-4" />
              Bookmarks
            </Link>

            <Link
              href="/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Avatar className="size-6">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback className="text-xs">
                  {getAvatarFallbackName(session?.user?.name ?? "")}
                </AvatarFallback>
              </Avatar>
              {session?.user?.name ?? ""}
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4 space-y-8">
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
  );
};
