import React from "react";
import { CardDescription, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { getUsers } from "@/lib/getUsers";
import Link from "next/link";
import { getAvatarFallbackName } from "@/lib/utils";

const SuggestedFollowersCard = async () => {
  const users: Array<UserType> = await getUsers();

  return (
    <>
      {users?.map((user) => {
        return (
          <div
            key={user.id}
            className="flex flex-row items-center justify-between space-y-0 gap-x-3"
          >
            <Link href={`/profile/${user.username}`} className="flex gap-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="profile image"
                />
                <AvatarFallback className="text-zinc-400 text-xs">
                  {getAvatarFallbackName(user.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-sm">{user.name}</CardTitle>
                <CardDescription className="inline-block text-xs -mt-1 ">
                  @{user.username}
                </CardDescription>
              </div>
            </Link>

            <Button size="sm" variant="default" className="rounded-full">
              Follow
            </Button>
          </div>
        );
      })}
      {users?.length > 0 && (
        <Link
          className="hover:text-indigo-400 text-indigo-400/90 transition duration-150 mt-4 text-sm inline-block "
          href="/search"
        >
          Show more
        </Link>
      )}
      {users?.length < 1 && (
        <div className="flex flex-row items-center justify-between space-y-0 gap-x-3">
          <h2 className="font-semibold text-zinc-700 dark:text-zinc-400">
            No User Found
          </h2>
        </div>
      )}
    </>
  );
};

export default SuggestedFollowersCard;
