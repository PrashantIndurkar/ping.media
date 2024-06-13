import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CardDescription, CardFooter, CardTitle } from "../ui/card";
import { Dot } from "lucide-react";

import { formateDate } from "@/lib/utils";
import Link from "next/link";
import { HiDotsHorizontal } from "react-icons/hi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Comments = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="flex items-start flex-row gap-x-2">
      <Avatar
        className="size-7"
        // onClick={(e) => {
        //   e.stopPropagation();
        //   router.push(`/profile/${post.user.id}`);
        // }}
      >
        <AvatarImage src="https://github.com/shadcn.png" alt="profile image" />
        {/* <AvatarFallback>{getAvatarFallbackName(post.user.name)}</AvatarFallback> */}
      </Avatar>
      <div className="">
        <CardTitle
          className="text-md  font-medium"
          // onClick={(e) => {
          //   e.stopPropagation();
          //   router.push(`/profile/${post.user.id}`);
          // }}
        >
          <Link
            href={`/profile/${comment.user.id}`}
            className="hover:underline"
          >
            {" "}
            {comment.user.name}
          </Link>
          <Dot className="inline text-gray-600" />
          <span className="text-xs text-zinc-400">
            {formateDate(comment.created_at)}
          </span>
        </CardTitle>
        <CardDescription className="text-sm">{comment.content}</CardDescription>
        <CardFooter className="px-0 mt-2 gap-x-8">
          <button className="-space-x-1 dark:hover:bg-zinc-800 px-2 rounded-full">
            <span className="text-xs font-semibold">Like</span>
            <Dot className="inline text-gray-600" />
            <span className="text-xs">0</span>
          </button>

          <button className="-space-x-1 dark:hover:bg-zinc-800 px-2 rounded-full">
            <span className="text-xs font-semibold">Reply</span>
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              // onClick={(e) => {
              //   e.stopPropagation();
              // }}
            >
              <button
                className="-space-x-1 dark:hover:bg-zinc-800 px-2 rounded-full"
                aria-label="more options"
              >
                <span className="text-xs font-semibold">
                  <HiDotsHorizontal />
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit h-fit">
              <DropdownMenuItem className="cursor-pointer">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardFooter>
      </div>
    </div>
  );
};

export default Comments;
