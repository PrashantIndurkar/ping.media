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
import { AlertDeletePost } from "../../alert/delete-post";
import { PostContent } from "./post-content";
import { UserAvatar } from "@/components/user-avatar";
import { PostType } from "@/types/types";
import { Timestamp } from "@/components/timestamp";
import { User } from "next-auth";
import { Separator } from "@/components/ui/separator";
import { PostActions } from ".";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/options";

type PostCardProps = {
  user: User | null;
  posts: Array<PostType> | [];

  isAuthenticated?: boolean;
};

export const PostCard = async ({ user, posts }: PostCardProps) => {
  const session = await getAuthSession();
  const userId = session?.user?.id;

  return (
    <>
      {posts?.map((post) => {
        return (
          <Card
            key={post.id}
            className="shadow-none rounded-none border-b border-x-0 border-t-0  border-zinc-200 dark:border-zinc-700"
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center flex-row gap-x-2">
                <div>
                  <UserAvatar
                    name={post.author.name ?? ""}
                    email={post.author.email}
                    imageUrl={post.author.image ?? null}
                    className="size-10"
                    url={`/user/${post.authorId}`}
                  />
                </div>
                <div className="">
                  <CardTitle className="text-md font-medium hover:underline">
                    {post.author.name}
                  </CardTitle>
                  <CardDescription className="space-x-1">
                    <Link href="#">@prashant</Link>
                    <Dot className="inline text-gray-600" />
                    {/* <span className="text-xs">
                      {formateDate(post.createdAt)}
                    </span> */}
                    <Timestamp createdAt={post.createdAt} />
                  </CardDescription>
                </div>
              </div>
              {/* Report button / Report Icon */}

              {/* Post Options */}
              {post.authorId === user?.id && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="-space-x-1 dark:hover:bg-zinc-800 rounded-full"
                      aria-label="more options"
                    >
                      <span className="text-xs font-semibold">
                        <EllipsisVertical className="h-5 w-5 text-gray-500" />
                      </span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-fit h-fit">
                    <DropdownMenuItem className="cursor-pointer flex items-center justify-center">
                      <AlertDeletePost postId={post.id} />
                    </DropdownMenuItem>
                    <Separator className="my-1" />
                    <DropdownMenuItem className="cursor-pointer flex items-center justify-center">
                      <button className="">Edit</button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </CardHeader>

            {/* Post content */}
            <PostContent post={post} />

            {/* Post actions buttons and comment section */}
            <PostActions post={post} userId={userId} />
          </Card>
        );
      })}
    </>
  );
};
