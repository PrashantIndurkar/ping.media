import Post from "@/components/common/Post";
import MobileSidebar from "@/components/common/MobileSidebar";
import Logo from "@/components/common/Logo";
import CreatePost from "@/components/CreatePost";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(authOptions);
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

      <CreatePost />

      <main className="w-full">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
    </>
  );
}
