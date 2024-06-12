import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { ArrowUp } from "lucide-react";

const AddComment = ({ post }: { post: PostType }) => {
  return (
    <div className="relative mx-10 w-full max-w-full mt-4">
      <Avatar className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Input
        className="h-10 px-12 rounded-full w-full focus-visible:ring-0 focus-visible:ring-offset-0 bg-zinc-50 dark:bg-zinc-900"
        type="email"
        placeholder="Post your comment"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 border p-1 rounded-full bg-green-700/80 dark:bg-green-700/550 flex items-center justify-center text-gray-50 hover:bg-green-700/90">
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default AddComment;
