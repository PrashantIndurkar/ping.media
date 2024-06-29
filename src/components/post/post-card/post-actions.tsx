"use client";

import { CardFooter } from "@/components/ui/card";
import React, { useState } from "react";
import { PostLikesActions } from "../post-likes";
import { PostCommentsActions } from "../post-comments";
import { PostBookmarksActions } from "../post-bookmarks";
import { PostLikedUsers } from "../post-liked";
import { PostShare } from "../post-share";
import AddComment from "@/components/comment/add-comment";
import { CommentType, PostType } from "@/types/types";

type PostContentProps = {
  post: PostType;
  userId: string | undefined;
};

export const PostActions = ({ post, userId }: PostContentProps) => {
  const [show, setShow] = useState(false);
  return (
    <CardFooter className={`flex-col`}>
      <div className={`flex items-center justify-between w-full `}>
        <div className="flex items-center justify-between gap-x-10">
          <PostLikesActions post={post} userId={userId} />

          <PostCommentsActions
            postId={post.id}
            comments={post.comments as CommentType[]}
            show={show}
            setShow={setShow}
          />
        </div>

        <div className="flex items-center justify-between gap-10">
          <PostBookmarksActions />

          <PostShare post={post} />
        </div>
      </div>

      {/* shows the who liked this post on the bottom of the post */}
      {/* {<PostLikedUsers post={post} />} */}

      {/*  show the comments on the bottom of the post */}
      {show && <AddComment />}
    </CardFooter>
  );
};
