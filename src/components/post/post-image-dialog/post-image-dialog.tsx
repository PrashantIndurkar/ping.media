import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Env from "@/config/env";
import Image from "next/image";
import React from "react";

type PostImageDialogProps = {
  post: PostType;
};

export const PostImageDialog = ({ post }: PostImageDialogProps) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Dialog>
        <DialogTrigger asChild>
          {post?.image && (
            <AspectRatio ratio={16 / 9} className="bg-muted mt-5 rounded-lg">
              <Image
                src={`${Env.APP_URL}/uploads/${post?.image}`}
                alt="Photo by Drew Beamer"
                fill
                className="rounded-lg object-cover cursor-pointer"
              />
            </AspectRatio>
          )}
        </DialogTrigger>
        <DialogContent className="h-[90vh] w-[60vw]">
          {post?.image && (
            <Image
              src={`${Env.APP_URL}/uploads/${post?.image}`}
              alt="Photo by Drew Beamer"
              fill
              className="rounded-lg object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
