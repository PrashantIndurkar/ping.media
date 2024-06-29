import { Bookmark } from "lucide-react";
import React, { useState } from "react";
import ActionIcon from "../post-likes/action-icon";
import { cn } from "@/lib/utils";

export const PostBookmarksActions = () => {
  const [bookmark, setBookmark] = useState(false);

  /*TODO: add sound when clicked */
  return (
    <ActionIcon
    // className={`bg-gray-50 dark:bg-zinc-800/50 text-zinc-500 px-3 py-1 rounded-full flex items-center transition duration-100 ease-in-out group ${
    //   bookmark &&
    //   ""
    // }`}
    >
      <Bookmark
        className={cn(
          "size-5 fill-emerald-100  dark:text-emerald-700 dark: dark:text-green-100/90"
        )}
      />
    </ActionIcon>
  );
};
