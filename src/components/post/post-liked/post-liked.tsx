import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "lucide-react";
import React from "react";

export const PostLikedUsers = () => {
  return (
    <div className="mr-auto mt-4">
      <div className="flex items-center justify-between w-full gap-x-2 text-gray-500 text-sm">
        {/* TODO: add the who liked this post  */}
        <Avatar className="h-4 w-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Link href="#">
          {/* <strong className="font-medium">
        {users.map((user) => user.).join(", ")}
      </strong>{" "} */}
          Liked
        </Link>
      </div>
    </div>
  );
};
