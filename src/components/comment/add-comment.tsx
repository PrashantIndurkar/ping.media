"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { ArrowUp } from "lucide-react";
import { useSession } from "next-auth/react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { getAvatarFallbackName } from "@/utils/avatar-fallback-name";

const AddComment = () => {
  const { data } = useSession();
  const [content, setContent] = useState<string>("");
  const router = useRouter();

  // const submitComment = async () => {
  //   setIsLoading(true);
  //   axios
  //     .post("/api/comments", {
  //       content: content,
  //       post_id: post.id,
  //       toUserId: post.user.id,
  //     })
  //     .then((res) => {
  //       const response = res.data;

  //       if (response.status == 400) {
  //         setIsError(response.error);
  //       } else if (response.status == 200) {
  //         router.refresh();
  //         setIsError({});
  //         setContent("");
  //         toast({
  //           title: "Comment added successfully",
  //           description: response.message,
  //           className: "bg-zinc-500 text-white h-12 min-h-fit w-fit",
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       console.log("error from submit comment", error);
  //     });
  // };

  return (
    <>
      <div
        className="relative w-full max-w-full mt-4 "
        onClick={(e) => e.stopPropagation()}
      >
        <Avatar className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-xs">
            {getAvatarFallbackName(data?.user?.name || "")}
          </AvatarFallback>
        </Avatar>
        <Input
          className="h-10 px-12 rounded-full w-full focus-visible:ring-0 focus-visible:ring-offset-0 bg-zinc-50 dark:bg-zinc-900"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="email"
          placeholder="Post your comment"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 border p-1 rounded-full bg-green-700/80 dark:bg-green-700/550 flex items-center justify-center text-gray-50 hover:bg-green-700/90"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};

export default AddComment;
