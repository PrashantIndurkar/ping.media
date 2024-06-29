import React, { useOptimistic } from "react";
import ActionIcon from "./action-icon";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { PostLike } from "@prisma/client";
import { PostType } from "@/types/types";
import { likePost } from "@/services/api/post";

export const PostLikesActions = ({
  post,
  userId,
}: {
  post: PostType;
  userId: string | undefined;
}) => {
  const predicate = (like: PostLike) =>
    like.userId === userId && like.postId === post.id;

  const [optimisticLikes, addOptimisticLike] = useOptimistic<PostLike[]>(
    post.likes,
    // @ts-ignore
    (state: PostLike[], newLike: PostLike) =>
      // here we check if the like already exists, if it does, we remove it, if it doesn't, we add it
      state.some(predicate)
        ? state.filter((like) => like.userId !== userId)
        : [...state, newLike]
  );

  return (
    <div className="flex flex-col">
      <form
        action={async (formData: FormData) => {
          const postId = formData.get("postId");
          addOptimisticLike({ postId, userId });

          await likePost(postId);
        }}
      >
        <input type="hidden" name="postId" value={post.id} />

        <ActionIcon className="flex items-center gap-x-2">
          <Heart
            className={cn("h-6 w-6", {
              "text-rose-500 fill-rose-500": optimisticLikes.some(predicate),
            })}
          />
          {optimisticLikes.length > 0 ? (
            <p className="text-sm font-bold dark:text-white ">
              {optimisticLikes.length}
            </p>
          ) : (
            <p className="text-sm font-bold dark:text-zinc-500 ">0</p>
          )}
        </ActionIcon>
      </form>
    </div>
  );
};
