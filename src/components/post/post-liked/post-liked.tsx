import { UserAvatar } from "@/components/user-avatar";
import { PostType } from "@/types/types";
import Link from "next/link";
import React from "react";

export const PostLikedUsers = ({ post }: { post: PostType }) => {
  return (
    <div className="mr-auto mt-4">
      <div className="flex items-center justify-between w-full gap-x-2 text-gray-500 text-sm">
        {/* TODO: add the who liked this post  */}
        <UserAvatar
          className="size-4"
          name={post.author.name ?? ""}
          imageUrl={post.author.image ?? ""}
          email={post.author.email}
          url={`/users/${post.author.id}`}
        />
        <Link href="#">Liked</Link>
      </div>
    </div>
  );
};
