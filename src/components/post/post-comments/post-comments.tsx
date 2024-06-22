import { MessageSquare } from "lucide-react";
import React from "react";

type PostCommentActionsProps = {
  post: PostType;
  setShow: (props: boolean) => void;
  show: boolean;
  noRedirect?: boolean;
};

export const PostCommentsActions = ({
  post,
  setShow,
  show,
  noRedirect,
}: PostCommentActionsProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setShow(!show);
      }}
      className={`bg-gray-50 dark:bg-zinc-800/50 text-zinc-500 px-3 py-1 rounded-full flex items-center transition duration-100 ease-in-out group ${
        show && "bg-zinc-200/35 dark:text-zinc-300 dark:bg-zinc-800"
      } ${noRedirect && "pointer-events-none cursor-pointer"}`}
    >
      <MessageSquare className="size-5  group-hover:-rotate-12 transition duration-200 ease-in-out" />
      {post?.comment_count > 0 && (
        <span className="ml-2 font-medium">{post?.comment_count}</span>
      )}
    </button>
  );
};
