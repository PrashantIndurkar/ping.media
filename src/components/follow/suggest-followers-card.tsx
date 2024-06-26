import React from "react";
import { CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { getUsers } from "@/services/api/getUsers";
import { getAvatarFallbackName } from "@/utils/avatar-fallback-name";
import { generateUsernameFromEmail } from "@/utils/username";
import { UserAvatar } from "../user-avatar";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/options";
import { User } from "next-auth";

const SuggestedFollowersCard = async () => {
  const users: Array<UserType> = await getUsers();
  const session = await getAuthSession();
  const user: User | null = session?.user ?? null;

  return (
    <>
      {users?.map((user) => {
        return user.id !== user.id ? (
          <div
            key={user.id}
            className="flex flex-row items-center justify-between space-y-0 gap-x-3"
          >
            <Link href={`/user/${user.id}`} className="flex gap-x-2">
              <UserAvatar
                className="size-8"
                name={user.name}
                email={user.email}
                imageUrl={user.image ?? ""}
                url={`/user/${user.id}`}
              />
              <div>
                <CardTitle className="text-sm">{user.name}</CardTitle>
                <CardDescription className="inline-block text-xs -mt-1 ">
                  {generateUsernameFromEmail(user.email ?? "")}
                </CardDescription>
              </div>
            </Link>

            <Button size="sm" variant="default" className="rounded-full">
              Follow
            </Button>
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            Currently, We don't have any active users!
          </p>
        );
      })}
      {users?.length > 0 && (
        <Link
          className="transition duration-150 mt-4 text-sm inline-block text-muted-foreground hover:text-zinc-300 hover:underline"
          href="/search"
        >
          Show more...
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
