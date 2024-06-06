import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IoAdd } from "react-icons/io5";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

const CreatePost = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
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

            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 border p-1 rounded-full group-hover:bg-green-700/80 flex items-center justify-center visible bg-emerald-200/70 border-emerald-100 dark:bg-emerald-300/50 dark:border-0 text-green-700 hover:bg-emerald-100/90">
              <IoAdd className="h-6 w-6 text-emerald-700 group-hover:rotate-180 dark:text-zinc-50 transition duration-500 ease-in-out group-hover:text-zinc-50" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 min-h-64 rounded-lg w-4/5 lg:max-w-2xl xl:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="border-b py-4 flex items-center px-3">
            Create Post
          </DialogTitle>
          <DialogDescription>
            <Textarea
              placeholder="Type your message here."
              className="focus-visible:ring-0 text-lg text-zinc-200 min-h-60 focus-visible:ring-offset-0 border-none "
            />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="border-t px-3 py-4 flex items-center justify-end">
          <Button variant="primary" className="rounded-full">
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePost;
