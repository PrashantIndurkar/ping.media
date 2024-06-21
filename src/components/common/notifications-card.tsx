import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { formateDate } from "@/utils/date-format";
import { UserRoundPlus } from "lucide-react";
import React from "react";

const NotificationsCard = ({
  notification,
}: {
  notification: NotificationType;
}) => {
  return (
    <Card className="border-x-0 border-t-0 rounded-none p-4 flex flex-row gap-x-4 justify-between items-center shadow-none cursor-pointer dark:hover:bg-zinc-800 hover:bg-zinc-100 transition duration-150 ease-in-out">
      <div className="flex gap-x-4">
        <UserRoundPlus className="text-gray-400 dark:text-gray-600" />
        <div className="flex gap-x-4 items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <CardDescription>
            <span className="font-semibold hover:underline dark:text-zinc-100 text-zinc-800 text-sm inline">
              {notification.user.name}
            </span>{" "}
            {notification.content}
          </CardDescription>
        </div>
      </div>
      <span className="text-sm dark:text-gray-400 text-gray-400">
        {formateDate(notification.created_at)}
      </span>
    </Card>
  );
};

export default NotificationsCard;
