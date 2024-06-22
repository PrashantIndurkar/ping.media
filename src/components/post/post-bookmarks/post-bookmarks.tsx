import { Bookmark } from "lucide-react";
import React, { useState } from "react";

export const PostBookmarksActions = () => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setBookmark(!bookmark);
      }}
      className={`bg-gray-50 dark:bg-zinc-800/50 text-zinc-500 px-3 py-1 rounded-full flex items-center transition duration-100 ease-in-out group ${
        bookmark &&
        "bg-emerald-100 border-emerald-100  dark:bg-emerald-900/40 dark:border-0 text-green-600/95 dark:text-green-100/90"
      }`}
    >
      <Bookmark className="size-5 group-hover:-rotate-12 transition duration-200 ease-in-out" />
    </button>
  );
};
