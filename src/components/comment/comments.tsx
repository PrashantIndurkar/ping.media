"use client";
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
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

const Comments = ({ comment }: { comment: CommentType }) => {
  const { toast } = useToast();
  const router = useRouter();

  const deleteComment = () => {
    axios.delete(`/api/comments/${comment.id}`).then((res) => {
      const response = res.data;
      if (response.status == 200) {
        toast({
          title: "Comment Deleted",
          description: response.message,
          className: "bg-red-500 text-white",
        });
        router.refresh();
      }
    });
  };

  return (
    <div className="flex items-start flex-row gap-x-2">
      <Avatar className="size-7">
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
            <DropdownMenuTrigger asChild>
              <button
                className="-space-x-1 dark:hover:bg-zinc-800 px-0.5 rounded-full"
                aria-label="more options"
              >
                <span className="text-xs font-semibold">
                  <HiDotsHorizontal className="h-5 w-5 text-gray-500" />
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit h-fit">
              <DropdownMenuItem className="cursor-pointer">
                <button
                  onClick={deleteComment}
                  className="dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-500 transition duration-150 ease-in-out text-xs w-full"
                >
                  Delete
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardFooter>
      </div>
    </div>
  );
};

export default Comments;
