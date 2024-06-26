"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  HomeIcon,
  MessageCircle,
  Search,
  UserRoundSearch,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AlertDialogLogout } from "../alert/logout";
import { UserAvatar } from "../user-avatar";
import { User } from "next-auth";

type MobileSidebarLinksProps = {
  user: User | null;
};

export const MobileSidebarLinks = ({ user }: MobileSidebarLinksProps) => {
  const pathname = usePathname();
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <nav className="grid gap-2 text-lg font-medium">
      <Link
        href="/feed"
        className="flex items-center gap-2 text-lg font-semibold"
      >
        <Image src="/images/Logo.png" width={30} height={30} alt="Ping Logo" />
        <h1 className="text-lg font-semibold">Ping</h1>
      </Link>

      <Link
        href="/feed"
        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground ${
          active === "/feed" ? "bg-muted text-primary" : ""
        }`}
      >
        <HomeIcon className="size-5" />
        Feed
      </Link>
      <Link
        href="/messages"
        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground ${
          active === "/messages" ? "bg-muted text-primary" : ""
        }`}
      >
        <MessageCircle className="size-5" />
        Messages
      </Link>
      <Link
        href="/jobs"
        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground ${
          active === "/jobs" ? "bg-muted text-primary" : ""
        }`}
      >
        <BriefcaseBusiness className="size-5" />
        Jobs
      </Link>
      <Link
        href="/explore"
        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground ${
          active === "/explore" ? "bg-muted text-primary" : ""
        }`}
      >
        <Search className="size-5" />
        Explore
      </Link>
      <Link
        href="/network"
        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground ${
          active === "/network" ? "bg-muted text-primary" : ""
        }`}
      >
        <UserRoundSearch className="size-5" />
        My Network
      </Link>
      <Link
        href="/notifications"
        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground ${
          active === "/notifications" ? "bg-muted text-primary" : ""
        }`}
      >
        <Bell className="size-5" />
        Notifications
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
      <Link
        href="/bookmarks"
        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground ${
          active === "/bookmarks" ? "bg-muted text-primary" : ""
        }`}
      >
        <Bookmark className="size-5" />
        Bookmarks
      </Link>
      <div className="flex items-center justify-between mt-12 ">
        {/* <Link
          href="/profile"
          className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground"
        >
          <Avatar className="size-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              {getAvatarFallbackName(session?.user?.name ?? "")}
            </AvatarFallback>
          </Avatar>
          {session?.user?.name ?? ""}
        </Link> */}
        <Link
          href={`/user/${user?.id}`}
          className="flex items-center gap-3 rounded-lg px-3 py-2 my-2 text-muted-foreground transition-all hover:text-primary"
        >
          <UserAvatar
            name={user?.name ?? ""}
            email={user?.email ?? ""}
            imageUrl={user?.image ?? ""}
            url={`/user/${user?.id}`}
            className="size-10"
          />

          {user ? (
            user?.name ?? ""
          ) : (
            <div className="h-2 w-24 rounded-md bg-zinc-200/20"></div>
          )}
        </Link>
        <AlertDialogLogout />
      </div>
    </nav>
  );
};
