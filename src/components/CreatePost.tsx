"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IoAdd } from "react-icons/io5";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { ImagePlus, Plus } from "lucide-react";
import ImagePreviewCard from "./common/ImagePreviewCard";

const CreatePost = ({ button }: { button?: boolean }) => {
  const imageRef = React.useRef<HTMLInputElement | null>(null);
  const [image, setImage] = React.useState<File | null>(null);
  // const [isImageUploaded, setIsImageUploaded] = React.useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = React.useState<string | undefined>();
  const [content, setContent] = React.useState<string>("");

  const handleClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
    }
  };

  const removePreviewImage = () => {
    setImage(null);
    setPreviewUrl(undefined);
  };
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        {button ? (
          <section className="absolute right-16 bottom-16 flex items-center justify-center w-24 h-20 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-200 hover:text-zinc-500 transition duration-150 ease-in-out border border-zinc-200 hover:scale-110 dark:border-zinc-700 cursor-pointer">
            <Plus className="h-8 w-8" />
          </section>
        ) : (
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
        )}
      </DialogTrigger>
      <DialogContent className="p-0 min-h-64 rounded-lg w-4/5 lg:max-w-2xl xl:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="border-b py-4 flex items-center px-3">
            Create Post
          </DialogTitle>
          <DialogDescription>
            <Textarea
              placeholder="Type your message here."
              className="focus-visible:ring-0 text-lg text-zinc-200 min-h-60 focus-visible:ring-offset-0 border-none max-h-[60vh] overflow-y-auto"
              onChange={(e) => setContent(e.target.value)}
            />
            {previewUrl && (
              <ImagePreviewCard
                image={previewUrl}
                callback={removePreviewImage}
              />
            )}
          </DialogDescription>
        </DialogHeader>
        <footer className="border-t p-3 flex items-center justify-between">
          <div
            className="h-10 w-10 border-r border-b border-l border-t border-zinc-200 dark:border-zinc-700 flex items-center justify-center rounded-full cursor-pointer hover:bg-emerald-200/70 dark:hover:bg-emerald-300/50 transition duration-500 ease-in-out"
            onClick={handleClick}
          >
            <input
              type="file"
              ref={imageRef}
              className="hidden"
              onChange={handleImageChange}
            />
            <ImagePlus className="h-5 inline-block w-5 text-emerald-700 group-hover:rotate-180 dark:text-zinc-50 transition duration-500 ease-in-out group-hover:text-zinc-50" />
          </div>
          <Button
            disabled={content?.length < 1 ? true : false}
            variant="primary"
            className={`rounded-full px-5 ${
              content?.length < 1 ? "disabled !bg-gray-200" : ""
            }`}
          >
            Post
          </Button>
        </footer>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePost;
