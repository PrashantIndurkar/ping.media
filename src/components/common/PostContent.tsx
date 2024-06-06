"use client";
import React from "react";
import { CardContent, CardFooter } from "../ui/card";
import {
  ArrowUp,
  Bookmark,
  Github,
  Heart,
  Link as LinkIcon,
  Linkedin,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Share,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

const PostContent = () => {
  const [show, setShow] = React.useState(false);
  const [votes, setVotes] = React.useState(true);
  return (
    <>
      <CardContent className="-mt-2 px-[4.5rem]">
        <div className=""></div>
        <p className="prose text-zinc-800 dark:text-zinc-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          officia ea quo iste rem ipsam voluptas hic voluptate sapiente, autem
          quaerat cupiditate doloremque, dolorum labore excepturi facilis
          debitis odio omnis?
        </p>
      </CardContent>
      <CardFooter className="flex-col pl-[4.5rem]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between gap-x-10">
            <button className="border px-3 py-1.5 rounded-full flex items-center justify-center">
              <Heart />
            </button>
            <button
              onClick={() => setShow(!show)}
              className={`border px-3 py-1.5 rounded-full flex items-center justify-center ${
                show && " bg-zinc-100 dark:bg-zinc-800"
              }`}
            >
              <MessageSquare className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center justify-between gap-10">
            <button className="border px-3 py-1.5 rounded-full flex items-center justify-center">
              <Bookmark className="h-5 w-5" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="border px-3 py-1.5 rounded-full flex items-center justify-center">
                  <Share className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem className="cursor-pointer">
                  <X className="mr-2 h-4 w-4" />
                  <span>twitter.com / x.com</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  <span>Linkedin</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {votes && (
          <div className="mr-auto mt-4">
            <div className="flex items-center justify-between w-full gap-x-2 text-gray-500 text-sm">
              <Avatar className="h-4 w-4">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <Link href="/">
                <strong className="font-medium">Prashant</strong> Liked
              </Link>
            </div>
          </div>
        )}
        {show && (
          <div className="relative mx-10 w-full max-w-full mt-4">
            <Avatar className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Input
              className="h-10 pl-12 rounded-full w-full focus-visible:ring-0 focus-visible:ring-offset-0 bg-zinc-50 dark:bg-zinc-900"
              type="email"
              placeholder="Post your comment"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 border p-1 rounded-full bg-green-700/80 dark:bg-green-700/550 flex items-center justify-center text-gray-50">
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        )}
      </CardFooter>
    </>
  );
};

export default PostContent;
