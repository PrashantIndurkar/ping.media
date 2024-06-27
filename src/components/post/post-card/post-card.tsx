"use client";

import { Dot, EllipsisVertical } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formateDate } from "@/utils/date-format";
import { AlertDeletePost } from "../../alert/delete-post";
import { PostContent } from "./post-content";
import { UserAvatar } from "@/components/user-avatar";

type PostCardProps = {
  posts: Array<PostType> | [];
  noRedirect?: boolean;
  isAuthenticated?: boolean;
};

export const PostCard = ({ posts, noRedirect }: PostCardProps) => {
  const router = useRouter();
  // console.log("posts", posts[0].author.image);

  return (
    <>
      {posts?.map((post) => {
        return (
          <Card
            onClick={() => router.push(`/post/${post.id}`)}
            key={post.id}
            className={`shadow-none rounded-none border-b border-x-0 border-t-0  border-zinc-200 dark:border-zinc-700  ${
              noRedirect
                ? "border-none"
                : "dark:hover:bg-zinc-900/50 hover:bg-zinc-50 cursor-pointer"
            } `}
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center flex-row gap-x-2">
                {/* <Avatar
                  className="h-10 w-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/profile/${post.authorId}`);
                  }}
                >
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="profile image"
                  />
                  <AvatarFallback>
                    {getAvatarFallbackName(post.author.name)}
                  </AvatarFallback>
                </Avatar> */}
                <div
                // onClick={(e) => {
                //   e.stopPropagation();
                //   router.push(`/profile/${post.authorId}`);
                // }}
                >
                  <UserAvatar
                    name={post.author.name}
                    email={post.author.email}
                    imageUrl={post.author.image ?? null}
                    className="size-10"
                    url={`/user/${post.authorId}`}
                  />
                </div>
                <div className="">
                  <CardTitle
                    className="text-md font-medium hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/profile/${post.author.id}`);
                    }}
                  >
                    {post.author.name}
                  </CardTitle>
                  <CardDescription className="space-x-1">
                    <Link href="#">@prashant</Link>
                    <Dot className="inline text-gray-600" />
                    <span className="text-xs">
                      {formateDate(post.createdAt)}
                    </span>
                  </CardDescription>
                </div>
              </div>
              {/* Report button / Report Icon */}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="-space-x-1 dark:hover:bg-zinc-800 rounded-full"
                    aria-label="more options"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <span className="text-xs font-semibold">
                      <EllipsisVertical className="h-5 w-5 text-gray-500" />
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-fit h-fit">
                  <DropdownMenuItem className="cursor-pointer">
                    <AlertDeletePost postId={post.id} noRedirect={noRedirect} />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <PostContent post={post} noRedirect={noRedirect} />
          </Card>
        );
      })}
    </>
  );
};
