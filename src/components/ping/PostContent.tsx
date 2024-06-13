"use client";
import React from "react";
import { CardContent, CardFooter } from "../ui/card";
import {
  Bookmark,
  Link as LinkIcon,
  Linkedin,
  MessageSquare,
  Share,
  X,
} from "lucide-react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Env from "@/config/env";
import AddComment from "../comment/add-comment";

const PostContent = ({
  post,
  noRedirect,
}: {
  post: PostType;
  noRedirect?: boolean;
}) => {
  const [show, setShow] = React.useState(false);
  const [vote, setVote] = React.useState(true);
  const [bookmark, setBookmark] = React.useState(true);

  return (
    <div>
      <CardContent className="-mt-2 pl-[4.5rem]">
        <p className="prose text-zinc-800 dark:text-zinc-300">
          {post?.content}
        </p>
        {/* Popup for image */}
        <div onClick={(e) => e.stopPropagation()}>
          <Dialog>
            <DialogTrigger asChild>
              {post?.image && (
                <AspectRatio
                  ratio={16 / 9}
                  className="bg-muted mt-5 rounded-lg"
                >
                  <Image
                    src={`${Env.APP_URL}/uploads/${post?.image}`}
                    alt="Photo by Drew Beamer"
                    fill
                    className="rounded-lg object-cover cursor-pointer"
                  />
                </AspectRatio>
              )}
            </DialogTrigger>
            <DialogContent className="h-[90vh] w-[60vw]">
              {post?.image && (
                <Image
                  src={`${Env.APP_URL}/uploads/${post?.image}`}
                  alt="Photo by Drew Beamer"
                  fill
                  className="rounded-lg object-contain"
                />
              )}
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
      <CardFooter className={`flex-col ${!noRedirect && "pl-[4.5rem]"}`}>
        <div
          className={`flex items-center justify-between w-full  ${
            noRedirect && "pl-10 pb-6 border-b"
          }`}
        >
          <div className="flex items-center justify-between gap-x-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setVote(!vote);
              }}
              className={`bg-gray-50 px-3 py-1 rounded-full flex items-center transition duration-100 ease-in-out ${
                vote &&
                "bg-rose-50 dark:bg-red-800/10 dark:text-rose-300 text-rose-400/90 group"
              }`}
            >
              {vote ? (
                <IoHeart className="size-5 group-hover:scale-125 transition duration-200 ease-in-out" />
              ) : (
                <IoHeartOutline className="size-5 group-hover:scale-125 transition duration-200 ease-in-out" />
              )}{" "}
              <span className="ml-2 font-medium ">1</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShow(!show);
              }}
              className={`bg-gray-50 dark:bg-zinc-800/50 text-zinc-500 px-3 py-1 rounded-full flex items-center transition duration-100 ease-in-out group ${
                show && "bg-zinc-200/35 dark:text-zinc-300 dark:bg-zinc-800"
              } ${noRedirect && "pointer-events-none cursor-pointer"}`}
            >
              <MessageSquare className="size-5  group-hover:-rotate-12 transition duration-200 ease-in-out" />
              {post?.comment_count > 0 && (
                <span className="ml-2 font-medium">{post?.comment_count}</span>
              )}
            </button>
          </div>
          <div className="flex items-center justify-between gap-10">
            {/* add sound when clicked */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setBookmark(!bookmark);
              }}
              className={`bg-gray-50 dark:bg-zinc-800/50 text-zinc-500 px-3 py-1 rounded-full flex items-center transition duration-100 ease-in-out group ${
                bookmark &&
                "bg-emerald-100 border-emerald-100  dark:bg-emerald-900/40 dark:border-0 text-green-600/95 dark:text-green-100/90"
              }`}
            >
              <Bookmark className="size-5 group-hover:-rotate-12 transition duration-200 ease-in-out" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <button className="bg-gray-50 dark:bg-zinc-800/50 px-3 py-1 rounded-full flex items-center text-zinc-400 justify-center group">
                  <Share className="size-5 group-hover:-rotate-12 transition duration-200 ease-in-out" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem className="cursor-pointer">
                  <X className="mr-2 size-4" />
                  <span>twitter.com / x.com</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Linkedin className="mr-2 size-4" />
                  <span>Linkedin</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <LinkIcon className="mr-2 size-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {vote ||
          (noRedirect && (
            <div className="mr-auto mt-4">
              <div className="flex items-center justify-between w-full gap-x-2 text-gray-500 text-sm">
                {/* TODO: add the who liked this post  */}
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
          ))}

        {(show || noRedirect) && (
          <AddComment post={post} noRedirect={noRedirect} />
        )}
      </CardFooter>
    </div>
  );
};

export default PostContent;
