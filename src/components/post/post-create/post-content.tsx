"use client";

import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { IoAdd } from "react-icons/io5";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../../ui/button";
import { ImagePlus, Plus } from "lucide-react";
import axios from "axios";
import { useToast } from "../../ui/use-toast";
import { useRouter } from "next/navigation";
import ImagePreviewCard from "../../common/image-preview-card";
import { UserAvatar } from "@/components/user-avatar";
import { User } from "next-auth";

interface CreatePostProps {
  user: User | null;
  button?: boolean;
}

export const CreatePost = ({ button, user }: CreatePostProps) => {
  const { toast } = useToast();
  const router = useRouter();
  // State to control dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const imageRef = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<PostErrorType>({});

  const handleClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  // Handle the image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
    }
  };

  // Remove the preview image
  const removePreviewImage = () => {
    setImage(null);
    setPreviewUrl(undefined);
  };

  // Submit the post
  const submitPost = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("content", content);
    if (image) formData.append("image", image!);

    axios
      .post("/api/post", formData)
      .then((res) => {
        setIsLoading(false);
        const response = res.data;
        if (response.status == 400) {
          setIsError(response.errors);
        } else if (response.status == 200) {
          setContent("");
          setImage(null);
          setPreviewUrl(undefined);
          setIsError({});
          toast({
            title: "Success",
            description: response.message,
            className: "bg-green-400",
          });
          router.refresh();
          setIsDialogOpen(false);
        } else if (response.status == 500) {
          toast({
            title: "Error",
            description: response.message,
            className: "bg-red-300",
          });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("Error in Creating post", err);
      });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className="w-full">
        {button ? (
          <section className="absolute right-16 bottom-16 flex items-center justify-center size-16 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-200 hover:text-zinc-500 transition duration-150 ease-in-out border border-zinc-200 hover:scale-110 dark:border-zinc-700 cursor-pointer">
            <Plus className="size-6" />
          </section>
        ) : (
          <div className="relative rounded-full mx-10 transition duration-200 ease-in-out group-hover:shadow-xl  ">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <UserAvatar
                name={user?.name ?? ""}
                email={user?.email ?? ""}
                imageUrl={user?.image ?? ""}
                className="size-8"
                url={`/user/${user?.id}`}
              />
            </div>
            <div className="h-12 pl-14 rounded-full w-full cursor-pointer border focus-visible:ring-0 focus-visible:ring-offset-0 bg-white dark:bg-zinc-900 group-hover:dark:bg-zinc-800 flex items-center ">
              <span className="text-zinc-500">Write your post here...</span>
            </div>

            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 border p-1 rounded-full group-hover:bg-green-700/80 flex items-center justify-center visible bg-emerald-200/70 border-emerald-100 dark:bg-emerald-300/50 dark:border-0 text-green-700 hover:bg-emerald-100/90">
              <IoAdd className="h-6 w-6 text-emerald-700 group-hover:rotate-180 dark:text-zinc-50 transition duration-500 ease-in-out group-hover:text-zinc-50" />
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
              className="focus-visible:ring-0 text-lg text-zinc-700 dark:text-zinc-200 min-h-60 focus-visible:ring-offset-0 border-none max-h-[60vh] overflow-y-auto"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {previewUrl && (
              <ImagePreviewCard
                image={previewUrl}
                callback={removePreviewImage}
              />
            )}
          </DialogDescription>
          {isError && <span className="text-red-500">{isError.content}</span>}
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
            disabled={content?.length < 1 || isLoading ? true : false}
            variant="primary"
            className={`rounded-full px-5 ${
              content?.length < 1 ? "disabled !bg-gray-200" : ""
            }`}
            onClick={submitPost}
          >
            Post
          </Button>
        </footer>
      </DialogContent>
    </Dialog>
  );
};
