"use client";
import { Dot, EllipsisVertical } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import PostContent from "./PostContent";
import { formateDate } from "@/lib/utils";

const PostCard = ({ posts }: { posts: Array<PostType> | [] }) => {
  return (
    <>
      {posts?.map((post) => {
        return (
          <Card
            key={post.id}
            className="shadow-none rounded-none border-b border-x-0 border-t-0 dark:hover:bg-zinc-900/50 hover:bg-zinc-50 border-zinc-200 dark:border-zinc-700"
          >
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
                    {post.user.name}
                  </CardTitle>
                  <CardDescription className="space-x-1">
                    <Link href="#">@prashant</Link>
                    <Dot className="inline text-gray-600" />
                    <span>{formateDate(post.created_at)}</span>
                  </CardDescription>
                </div>
              </div>
              {/* Report button / Report Icon */}
              <EllipsisVertical className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <PostContent post={post} />
          </Card>
        );
      })}
    </>
  );
};

export default PostCard;
