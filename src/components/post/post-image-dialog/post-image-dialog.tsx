import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Env from "@/config/env";
import Image from "next/image";
import React from "react";

type PostImageDialogProps = {
  imageUrl: string;
};

export const PostImageDialog = ({ imageUrl }: PostImageDialogProps) => {
  console.log("imageUrl", imageUrl);
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Dialog>
        <DialogTrigger asChild>
          {imageUrl && (
            <AspectRatio ratio={16 / 9} className="bg-muted mt-5 rounded-lg">
              <Image
                src={imageUrl}
                alt="Photo by Drew Beamer"
                fill
                className="rounded-lg object-cover cursor-pointer"
              />
            </AspectRatio>
          )}
        </DialogTrigger>
        <DialogContent className="h-[90vh] w-[60vw]">
          {imageUrl && (
            <Image
              src={imageUrl}
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
