import { Dot, EllipsisVertical } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import PostContent from "./PostContent";

const Post = () => {
  return (
    <Card className="shadow-none rounded-none border-b border-x-0 border-t-0 dark:hover:bg-zinc-900/50 hover:bg-zinc-50 border-zinc-200 dark:border-zinc-700">
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
      <PostContent />
    </Card>
  );
};

export default Post;
