import PostCard from "@/components/ping/post-card";
import CreatePost from "@/components/ping/create-post";
import { Suspense } from "react";
import PostCardSkeleton from "@/components/ping/post-card-skeleton";
import Await from "@/components/ping/await";
import { MobileSidebar } from "@/components/sidebar";
import { getPosts } from "@/services/api/getPosts";
import { Logo } from "@/components/logo";

export default function Home() {
  const postsPromise = getPosts();

  return (
    <>
      {/* {session && (JSON.stringify(session) as string)} */}
      <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 dark:bg-gray-900/15  flex items-center justify-betweens w-full ">
        <>
          <MobileSidebar />
          <Logo />
        </>
        <h3 className="text-lg font-medium ml-auto md:ml-0">Scroll</h3>
      </header>
      <div className="sticky top-0 justify-center w-full border-b bg-zinc-50 dark:bg-zinc-900 py-4 flex items-center z-30 group cursor-pointer">
        <CreatePost />
      </div>

      <main className="w-full">
        <Suspense fallback={<PostCardSkeleton />}>
          <Await promise={postsPromise}>
            {(data) => <PostCard posts={data} />}
          </Await>
        </Suspense>
      </main>
    </>
  );
}
