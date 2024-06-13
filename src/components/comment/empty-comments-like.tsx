import Image from "next/image";
import React from "react";

const EmptyCommentsLike = () => {
  return (
    <div className="flex items-center flex-col justify-center h-80 ">
      <Image
        src="/app-images/comment.svg"
        width={100}
        height={100}
        alt="comment"
        className="mb-6"
      />
      <span className="text-[0.80rem] text-zinc-400 mb-2">
        Your likes and comments are appreciated!
      </span>
      <span className="text-xs text-zinc-400">
        Words have a significant impact. Show kindness.
      </span>
    </div>
  );
};

export default EmptyCommentsLike;
