import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Input } from "@/components/ui/input";

import Post from "@/components/common/Post";
import MobileSidebar from "@/components/common/MobileSidebar";
import Logo from "@/components/common/Logo";

export default function Home() {
  return (
    <>
      <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 dark:bg-zinc-900 z-10 flex items-center justify-betweens w-full ">
        <>
          <MobileSidebar />
          <Logo />
        </>
        <h3 className="text-lg font-medium ml-auto md:ml-0">Scroll</h3>
      </header>
      <div className="sticky top-0 justify-center w-full border-b bg-zinc-50 dark:bg-zinc-900 py-4 flex items-center z-20 ">
        <div className="relative mx-10 w-full max-w-full">
          <Avatar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Input
            className="h-12 pl-14 rounded-full w-full focus-visible:ring-0 focus-visible:ring-offset-0"
            type="email"
            placeholder="Write your post here..."
          />
        </div>
      </div>
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
