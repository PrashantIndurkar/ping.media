import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Share, Link as LinkIcon } from "lucide-react";
import {
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import { useToast } from "@/components/ui/use-toast";
import Env from "@/config/env";
import { FaRegCircleCheck } from "react-icons/fa6";

type PostShareProps = {
  post: PostType;
};

export const PostShare = ({ post }: PostShareProps) => {
  const shareUrl = `${Env.APP_URL}/post/${post.id}`;

  const { toast } = useToast();
  const copyUrl = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      description: (
        <div className="flex items-center gap-x-2">
          <FaRegCircleCheck className="size-4" />
          <span>Link copied to clipboard</span>
        </div>
      ),
      className:
        "bg-emerald-50 dark:bg-emerald-900/40 dark:text-emerald-300 text-emerald-700 z-100 !h-6 w-fit",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="bg-gray-50 dark:bg-zinc-800/50 px-3 py-1 rounded-full flex items-center text-zinc-400 justify-center group">
          <Share className="size-5 group-hover:-rotate-12 transition duration-200 ease-in-out" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuItem>
          <TwitterShareButton
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
            url={"https://github.com/next-share"}
            title={"Sharing from ping-media.vercel.app"}
          >
            <TwitterIcon size={20} round />
            <span>Twitter</span>
          </TwitterShareButton>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LinkedinShareButton
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
            url={"https://github.com/next-share"}
          >
            <LinkedinIcon size={20} round />
            <span>LinkedIn</span>
          </LinkedinShareButton>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <WhatsappShareButton
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
            url={"https://github.com/next-share"}
            title={"Sharing from ping-media.vercel.app"}
            separator=":: "
          >
            <WhatsappIcon size={20} round />
            <span>Whatsapp</span>
          </WhatsappShareButton>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={copyUrl}>
          <LinkIcon className="mr-2 size-4" />
          <span>Copy Link</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
