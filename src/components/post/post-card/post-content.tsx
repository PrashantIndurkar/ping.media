"use client";

import React, { useEffect, useState } from "react";
import { CardContent, CardFooter } from "../../ui/card";
import AddComment from "../../comment/add-comment";
import { PostCommentsActions } from "../post-comments";
import { PostLikesActions } from "../post-likes";
import { PostBookmarksActions } from "../post-bookmarks";
import { PostShare } from "../post-share";
import { PostLikedUsers } from "../post-liked";
import { PostImageDialog } from "../post-image-dialog";

type PostContentProps = {
  post: PostType;
  noRedirect?: boolean;
};

export const PostContent = ({ post, noRedirect }: PostContentProps) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <CardContent className="-mt-2 pl-[4.5rem]">
        <p className="prose text-zinc-800 dark:text-zinc-300">
          {post?.content}
        </p>
        {/* Popup for image */}
        <PostImageDialog post={post} />
      </CardContent>

      <CardFooter className={`flex-col ${!noRedirect && "pl-[4.5rem]"}`}>
        <div
          className={`flex items-center justify-between w-full ${
            noRedirect && "pl-10 pb-6 border-b"
          }`}
        >
          <div className="flex items-center justify-between gap-x-10">
            <PostLikesActions post={post} />

            <PostCommentsActions
              post={post}
              setShow={setShow}
              noRedirect={noRedirect}
              show={show}
            />
          </div>

          <div className="flex items-center justify-between gap-10">
            {/*TODO: add sound when clicked */}
            <PostBookmarksActions />

            <PostShare post={post} />
          </div>
        </div>

        {/* shows the who liked this post on the bottom of the post */}
        {post?.Likes?.length > 0 && <PostLikedUsers />}

        {/*  show the comments on the bottom of the post */}
        {(show || noRedirect) && (
          <AddComment post={post} noRedirect={noRedirect} />
        )}
      </CardFooter>
    </div>
  );
};
