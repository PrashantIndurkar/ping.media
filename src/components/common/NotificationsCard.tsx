import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { UserRoundPlus } from "lucide-react";
import React from "react";

const NotificationsCard = () => {
  return (
    <Card className="border-x-0 border-t-0 rounded-none p-4 flex flex-row gap-x-4 justify-between items-center shadow-none cursor-pointer dark:hover:bg-zinc-800 hover:bg-zinc-100 transition duration-150 ease-in-out">
      <div className="flex gap-x-4">
        <UserRoundPlus className="text-gray-400 dark:text-gray-600" />
        <div>
          <div className="flex items-center gap-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <CardDescription className="mt-4">
            <span className="font-semibold hover:underline dark:text-gray-300 text-sm inline">
              Ronak Mutha
            </span>{" "}
            and 1 other started following you.
          </CardDescription>
        </div>
      </div>
      <span className="text-sm dark:text-gray-400 text-gray-400">
        5 Months ago
      </span>
    </Card>
  );
};

export default NotificationsCard;
