"use client";

import React, { useState } from "react";
import { CardContent, CardFooter } from "../../ui/card";
import AddComment from "../../comment/add-comment";
import { PostCommentsActions } from "../post-comments";
import { PostLikesActions } from "../post-likes";
import { PostBookmarksActions } from "../post-bookmarks";
import { PostShare } from "../post-share";
import { PostLikedUsers } from "../post-liked";
import { PostImageDialog } from "../post-image-dialog";
import { PostType } from "@/types/types";

type PostContentProps = {
  post: PostType;
};

export const PostContent = ({ post }: PostContentProps) => {
  return (
    <div>
      <CardContent className="-mt-2 pl-[4.5rem]">
        <p className="prose text-zinc-800 dark:text-zinc-300">
          {post?.content}
        </p>
        {/* Popup for image */}
        <PostImageDialog imageUrl={post.imageUrl ?? ""} />
      </CardContent>
    </div>
  );
};
