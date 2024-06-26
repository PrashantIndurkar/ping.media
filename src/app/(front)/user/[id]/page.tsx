import { Logo } from "@/components/logo";
import { MobileSidebar } from "@/components/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FaReact } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link as LinkIcon, MapPin, Pencil, UserRoundCog } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import HeaderTitle from "@/components/common/header-title";
import Comments from "@/components/comment/comments";
import { getUser } from "@/services/api/getUser";
import { getAvatarFallbackName } from "@/utils/avatar-fallback-name";
import { formateYears } from "@/utils/date-format";
import { PostCard, PostCardSkeleton } from "@/components/post/post-card";

const ShowUser = async ({ params }: { params: { id: number } }) => {
  const user: ShowUserType | null = await getUser(params.id);

  return (
    <>
      <header className="h-[4.5rem] border-b sticky top-0 left-0 right-0 px-4 dark:bg-zinc-900 z-10 flex items-center justify-between w-full ">
        <div className="flex items-center justify-betweens md:hidden">
          <MobileSidebar />
          <Logo />
        </div>
        <div className=" items-center gap-2 hidden md:flex">
          <h3 className="text-lg font-medium ml-auto md:ml-0">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt={user?.name + " avatar"}
              />
              <AvatarFallback className="text-xs">
                {getAvatarFallbackName(user?.name ?? "")}
              </AvatarFallback>
            </Avatar>
          </h3>
          <HeaderTitle back title="Prashant Indurkar" />
        </div>

        <Badge variant="profileBadge" className="cursor-pointer">
          <Pencil className="h-4 w-4 inline mr-1" />
          Edit Profile
        </Badge>
      </header>
      <section className="mt-12 flex items-center justify-center">
        <Card className="border-none w-full rounded-none flex flex-col items-center justify-center shadow-none">
          <CardHeader>
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-lg">
                {getAvatarFallbackName(user?.name ?? "")}
              </AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className="text-center">
            {/* Description main  */}
            <div className="flex items-center justify-center flex-col gap-2">
              <CardTitle>{user?.name}</CardTitle>
              <CardDescription className="cursor-pointer  hover:underline text-pink-400 w-fit">
                {user?.username ?? "asdf"}
              </CardDescription>
              <CardDescription>Full Stack Developer</CardDescription>
              <div className="space-x-2 mt-6 text-zinc-500 dark:text-zinc-400">
                <span className="items-center inline-flex">
                  <UserRoundCog className="h-4 w-4 inline mr-1" />
                  Member since {formateYears(user?.created_at ?? "")}
                </span>
                <span className="items-center inline-flex">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  Nanded, India
                </span>
                <Link
                  href="https://prashantindurkar.vercel.app"
                  className="hover:underline"
                  target="_blank"
                >
                  <LinkIcon className="h-4 w-4 inline mr-1" />
                  prashantindurkar.vercel.app
                </Link>
              </div>
            </div>

            {/* Badges or tags */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <Badge variant="profileBadge">
                <FaReact />
                ReactJs
              </Badge>
              <Badge variant="profileBadge">
                <FaReact />
                ReactJs
              </Badge>
              <Badge variant="profileBadge">
                <FaReact />
                ReactJs
              </Badge>
              <Badge variant="profileBadge">
                <FaReact />
                ReactJs
              </Badge>
              <Badge variant="profileBadge">
                <FaReact />
                ReactJs
              </Badge>

              <Badge variant="profileBadge">
                <FaReact />
                ReactJs
              </Badge>
            </div>
          </CardContent>

          {/* Footer or Tabs for About, Posts, Comments */}
          <CardFooter className="mt-8 w-full">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="flex flex-wrap gap-2 bg-transparent rounded-none border-b gap-x-12">
                <TabsTrigger value="about" className="text-md">
                  About
                </TabsTrigger>
                <TabsTrigger value="posts" className="text-md">
                  Posts
                </TabsTrigger>
                <TabsTrigger value="comments" className="text-md">
                  Comments
                </TabsTrigger>
              </TabsList>
              <section className="">
                <TabsContent value="about">Change your about here.</TabsContent>
                <TabsContent value="posts">
                  {/* {postsPromise && posts.length < 1 && <h1>Posts not found</h1>} */}
                  <Suspense fallback={<PostCardSkeleton />}>
                    <PostCard posts={user?.Post ?? []} />
                    {/* </Await> */}
                  </Suspense>
                </TabsContent>
                <TabsContent value="comments">
                  <Suspense fallback={<PostCardSkeleton />}>
                    {(user?.Comment ?? []).length > 0 ? (
                      user?.Comment?.map((comment: CommentType) => (
                        <Comments comment={comment} key={comment.id} />
                      ))
                    ) : (
                      <h1>Comments not found</h1>
                    )}
                  </Suspense>
                </TabsContent>
              </section>
            </Tabs>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default ShowUser;
