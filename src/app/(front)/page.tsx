import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoAdd } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import Post from "@/components/common/Post";
import MobileSidebar from "@/components/common/MobileSidebar";
import Logo from "@/components/common/Logo";

export default function Home() {
  return (
    <>
      <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 dark:bg-gray-900/15  flex items-center justify-betweens w-full ">
        <>
          <MobileSidebar />
          <Logo />
        </>
        <h3 className="text-lg font-medium ml-auto md:ml-0">Scroll</h3>
      </header>
      <div className="sticky top-0 justify-center w-full border-b bg-zinc-50 dark:bg-zinc-900/50 py-4 flex items-center z-30 group cursor-pointer">
        <div className="rounded-full relative mx-10 w-full max-w-full transition duration-200 ease-in-out group-hover:shadow-xl  ">
          <Avatar className="absolute left-2 top-1/2 transform -translate-y-1/2 h-8 w-8">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="user avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="h-12 pl-14 rounded-full w-full cursor-pointer border focus-visible:ring-0 focus-visible:ring-offset-0 bg-white dark:bg-zinc-900 group-hover:dark:bg-zinc-800 flex items-center ">
            <span className="text-zinc-500">Write your post here...</span>
          </div>
          <div>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 border p-1 rounded-full group-hover:bg-green-700/80 flex items-center justify-center visible bg-emerald-200/70 border-emerald-100 dark:bg-emerald-300/50 dark:border-0 text-green-700 hover:bg-emerald-100/90">
              <IoAdd className="h-6 w-6 text-emerald-700 group-hover:rotate-180 dark:text-zinc-50 transition duration-500 ease-in-out group-hover:text-zinc-50" />
            </button>
          </div>
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
