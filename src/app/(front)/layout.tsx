import type { Metadata } from "next";
import "../globals.css";
import { Dot } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SuggestedFollowersCard from "@/components/follow/suggest-followers-card";
import { Sidebar } from "@/components/sidebar";
import { getAvatarFallbackName } from "@/utils/avatar-fallback-name";
import { AlertDialogLogout } from "@/components/alert/logout";
import { CreatePost } from "@/components/post/post-create";
import { getAuthSession } from "../api/auth/[...nextauth]/options";
import { User } from "next-auth";
import { generateUsernameFromEmail } from "@/utils/username";
import { UserAvatar } from "@/components/user-avatar";

export const metadata: Metadata = {
  title: "Home · Ping Media",
  description:
    "Social media as it should be. Find your community among millions of users, unleash your creativity, and have some fun again.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getAuthSession();
  const user: User | null = session?.user ?? null;

  console.log("user", user);
  return (
    <>
      <div className="xl:max-w-[85rem] mx-auto overflow-hidden">
        <div className="flex h-screen">
          {/* left sidebar */}
          <Sidebar user={user} />
          {/* main content */}
          <div className="flex-1 flex flex-col">
            <section className="flex-1 overflow-y-auto hide-scrollbar ">
              {children}
            </section>
          </div>
          {/* right sidebar */}
          <div className="hidden xl:block border-l pl-6 w-80">
            <section className="mt-4 space-y-8">
              <Card className="rounded-2xl flex items-center gap-4 px-3 py-2.5 my-2 transition-all hover:text-primary justify-between">
                <Link href="/profile">
                  <div className="flex gap-2 items-center">
                    <UserAvatar
                      name={user?.name ?? ""}
                      email={user?.email ?? ""}
                      imageUrl={user?.image ?? ""}
                      className="size-10"
                      url={`/user/${user?.id}`}
                    />

                    <div className="space-y-1">
                      <span className="text-zinc-700 dark:text-zinc-300 font-bold text-sm block">
                        {user ? (
                          user?.name
                        ) : (
                          <div className="h-2 w-24 rounded-md bg-zinc-200/20"></div>
                        )}
                      </span>
                      <span className="block text-sm dark:text-zinc-400 text-zinc-500">
                        {user ? (
                          generateUsernameFromEmail(user?.email ?? "")
                        ) : (
                          <div className="h-2 w-12 rounded-md bg-zinc-200/20"></div>
                        )}
                      </span>
                    </div>
                  </div>
                </Link>
                {user ? (
                  <AlertDialogLogout />
                ) : (
                  <Link
                    href="/login"
                    className="dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-500 transition duration-150 ease-in-out text-xs border-none"
                  >
                    Sing in
                  </Link>
                )}
              </Card>

              {/* In the rotes filter the users those who are most active
                filter who has posted the most followers > posts > Comments > likes  
                and then show top 3 users 
              */}
              <Card>
                <CardHeader>
                  <h2 className="font-semibold text-zinc-700 dark:text-zinc-300">
                    Most Active Users
                  </h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SuggestedFollowersCard />
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader className="flex flex-row items-center space-y-0 p-6 gap-x-3">
                  <div className="flex items-center">
                    <div className="relative inline-flex">
                      <div className="w-2.5 h-2.5 bg-pink-500 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-pink-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                      <div className="w-2.5 h-2.5 bg-pink-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
                    </div>
                  </div>
                  <h2 className="font-semibold text-zinc-700 dark:text-zinc-300">
                    Active Discussions
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-row gap-x-2">
                    <UserAvatar
                      name={user?.name ?? ""}
                      email={user?.email ?? ""}
                      imageUrl={user?.image ?? ""}
                      url={`/user/${user?.id}`}
                    />
                    <div className="">
                      <CardTitle className="text-md font-medium ">
                        Johe doe <Dot className="inline text-gray-600" />{" "}
                        <span className="text-zinc-500 text-xs">
                          3 days ago
                        </span>
                      </CardTitle>
                      <CardDescription className="space-x-1 text-sm">
                        dolor sit amet consectetur, adipisicing elit.
                        Deserunt,Lorem ipsum rerum.
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Model */}
            <CreatePost button user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
