import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  Dot,
  HomeIcon,
  Menu,
  MessageCircle,
  Search,
  UserRoundSearch,
} from "lucide-react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
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
            href="/"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground"
          >
            <HomeIcon className="h-5 w-5" />
            Scroll
          </Link>
          <Link
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground"
          >
            <MessageCircle className="h-5 w-5" />
            Inbox
          </Link>
          <Link
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground"
          >
            <BriefcaseBusiness className="h-5 w-5" />
            Jobs
          </Link>
          <Link
            href="/search"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground"
          >
            <Search className="h-5 w-5" />
            Search
          </Link>
          <Link
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground"
          >
            <UserRoundSearch className="h-5 w-5" />
            My Network
          </Link>
          <Link
            href="/notifications"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 my-2 text-foreground hover:text-foreground"
          >
            <Bell className="h-5 w-5" />
            Notifications
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              6
            </Badge>
          </Link>
          <Link
            href="/bookmarks"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground"
          >
            <Bookmark className="h-5 w-5" />
            Bookmarks
          </Link>
          <Link
            href="/profile"
            className="mx-[-0.65rem] flex items-center mt-12 gap-4 rounded-xl px-3 py-2 my-2 text-muted-foreground hover:text-foreground"
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            Prashant
          </Link>
        </nav>

        <div className="mt-auto">
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
