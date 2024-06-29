import { Suspense } from "react";
import Await from "@/components/common/await";
import { MobileSidebar } from "@/components/sidebar";
import { Logo } from "@/components/logo";
import { CreatePost } from "@/components/post/post-create";
import { PostCard, PostCardSkeleton } from "@/components/post/post-card";
import { User } from "next-auth";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/options";
import { getPosts } from "@/services/api/post/get-posts";

export default async function Home() {
  const session = await getAuthSession();
  const user: User | null = session?.user ?? null;

  const posts = getPosts();

  return (
    <>
      <header className="h-[4.5rem] border-b sticky top-0 left-0 right-0 px-4 dark:bg-gray-900/15  flex items-center justify-betweens w-full ">
        <>
          <MobileSidebar />
          <Logo />
        </>
        <h3 className="text-lg font-medium ml-auto md:ml-0">Scroll</h3>
      </header>
      <div className="sticky top-0 justify-center w-full border-b bg-zinc-50 dark:bg-zinc-900 py-4 flex items-center z-30 group cursor-pointer">
        <CreatePost user={user} />
      </div>

      <main className="w-full">
        <Suspense fallback={<PostCardSkeleton />}>
          <Await promise={posts}>
            {(data) => <PostCard posts={data as any} user={user} />}
          </Await>
        </Suspense>
      </main>
    </>
  );
}
