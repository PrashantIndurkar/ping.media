"use client";
import React from "react";
import { CardContent, CardFooter } from "../ui/card";
import {
  ArrowUp,
  Bookmark,
  Link as LinkIcon,
  Linkedin,
  MessageSquare,
  Share,
  X,
} from "lucide-react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

const PostContent = () => {
  const [show, setShow] = React.useState(false);
  const [vote, setVote] = React.useState(true);
  const [bookmark, setBookmark] = React.useState(true);

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
            <button
              onClick={() => setVote(!vote)}
              className={`border px-3 py-1.5 rounded-full flex items-center text-zinc-400 transition duration-150 ease-in-out ${
                vote &&
                "bg-rose-50/90 dark:bg-red-800/10 dark:text-rose-300 text-rose-400 group"
              }`}
            >
              {vote ? (
                <IoHeart className="h-5 w-5 group-hover:scale-125 transition duration-200 ease-in-out" />
              ) : (
                <IoHeartOutline className="h-5 w-5 group-hover:scale-125 transition duration-200 ease-in-out" />
              )}{" "}
              <span className="ml-2 font-medium ">1</span>
            </button>
            <button
              onClick={() => setShow(!show)}
              className={`border px-3 py-1.5 rounded-full flex items-center text-zinc-400 justify-center group ${
                show && " bg-zinc-100 dark:bg-zinc-800"
              }`}
            >
              <MessageSquare className="h-5 w-5 group-hover:-rotate-12 transition duration-200 ease-in-out" />
              <span className="ml-2 font-medium">1</span>
            </button>
          </div>
          <div className="flex items-center justify-between gap-10">
            {/* add sound when clicked */}
            <button
              onClick={() => setBookmark(!bookmark)}
              className={`border px-3 py-1.5 rounded-full flex items-center text-zinc-400 transition duration-150 ease-in-out group ${
                bookmark &&
                "bg-emerald-100/90 border-emerald-100 dark:bg-emerald-900/40 dark:border-0 text-green-700"
              }`}
            >
              <Bookmark className="h-5 w-5 group-hover:-rotate-12 transition duration-200 ease-in-out" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="border px-3 py-1.5 rounded-full flex items-center text-zinc-400 justify-center group">
                  <Share className="h-5 w-5 group-hover:-rotate-12 transition duration-200 ease-in-out" />
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
        {vote && (
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
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 border p-1 rounded-full bg-green-700/80 dark:bg-green-700/550 flex items-center justify-center text-gray-50 hover:bg-green-700/90">
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        )}
      </CardFooter>
    </>
  );
};

export default PostContent;
