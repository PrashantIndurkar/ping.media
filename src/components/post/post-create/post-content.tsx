"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { IoAdd } from "react-icons/io5";
import { Button } from "../../ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserAvatar } from "@/components/user-avatar";
import { User } from "next-auth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { CreatePostSchema } from "@/validations/postSchema";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { toast } from "sonner";
import { UploadButton } from "@/types/uploadthings";
import Error from "@/components/error";
import { createPost } from "@/services/api/post/create-post";

interface CreatePostProps {
  user: User | null;
  button?: boolean;
}

export const CreatePost = ({ button, user }: CreatePostProps) => {
  const router = useRouter();
  // State to control dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof CreatePostSchema>>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      content: "",
      imageUrl: undefined,
    },
  });
  const imageUrl = form.watch("imageUrl");

  //TODO: We need to be fast first store the imageUrl in the state and show the image preview and then after we submit upload the image to uploadThings

  const onSubmit = async (data: z.infer<typeof CreatePostSchema>) => {
    const res = await createPost(data);
    if (res) {
      toast.error(<Error res={res} />);
    } else {
      setIsDialogOpen(false);
      toast.success("Post created successfully!");
      form.reset();
    }
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
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      className="focus-visible:ring-0 text-lg text-zinc-700 dark:text-zinc-200 min-h-60 focus-visible:ring-offset-0 border-none max-h-[60vh] overflow-y-auto resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!!imageUrl && (
              <div className="overflow-hidden rounded-md p-3 max-h-1/2">
                <AspectRatio
                  ratio={16 / 9}
                  className="bg-muted mt-5 rounded-lg"
                >
                  <Image
                    src={imageUrl}
                    alt="Post preview"
                    fill
                    className="rounded-lg object-cover cursor-pointer"
                  />
                </AspectRatio>
              </div>
            )}

            <footer className="border-t p-3 flex items-center justify-between">
              <FormField
                control={form.control}
                name="imageUrl"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          form.setValue("imageUrl", res[0].url);
                          toast.success("Upload complete");
                        }}
                        onUploadError={(error: Error) => {
                          console.error(error);
                          toast.error("Upload failed");
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={form.formState.isSubmitting}
                variant="primary"
                className="rounded-full px-5 disabled:bg-gray-200"
                type="submit"
              >
                Post
              </Button>
            </footer>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
