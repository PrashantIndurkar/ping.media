import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { BiSolidUpvote, BiUpvote } from "react-icons/bi";

export const PostLikesActions = ({ post }: { post: PostType }) => {
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLikeDislike = (status: string) => {
    if (loading) return;

    setLoading(true);
    setStatus(status);
    axios
      .post("/api/like", {
        status: status,
        post_id: post.id,
        toUserId: post.user_id,
      })
      .then((res) => {
        const response = res.data;
        console.log("The response is", response);
        router.refresh();
      })
      .catch((err) => {
        console.log("The error is", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <button
      className={`bg-gray-50 dark:bg-zinc-800/50 text-zinc-500 px-3 py-1 rounded-full flex items-center transition duration-100 ease-in-out ${
        (post?.Likes?.length > 0 || status == "1") &&
        "bg-rose-50  dark:bg-red-800/10 dark:text-rose-300 text-rose-400 group"
      }`}
    >
      {post?.Likes?.length > 0 ? (
        <>
          <BiSolidUpvote className=" size-5 group-hover:scale-125 transition duration-200 ease-in-out" />
        </>
      ) : (
        <BiUpvote className="size-5 group-hover:scale-125 transition duration-200 ease-in-out" />
      )}
      {post.likes_count > 0 && (
        <span className="ml-2 font-medium">{post.likes_count}</span>
      )}
    </button>
  );
};
