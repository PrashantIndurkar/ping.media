"use client";
import React from "react";
import { CardContent, CardFooter } from "../ui/card";
import {
  Bookmark,
  Github,
  Heart,
  Link,
  Linkedin,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Share,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const PostContent = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <CardContent className="-mt-2 px-[4.5rem]">
        <div className=""></div>
        <p className="prose text-zinc-800 dark:text-zinc-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          officia ea quo iste rem ipsam voluptas hic voluptate sapiente, autem
          quaerat cupiditate doloremque, dolorum labore excepturi facilis
          debitis odio omnis?
        </p>
      </CardContent>
      <CardFooter className="flex-col px-[4.5rem]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-between gap-x-10">
            <button onClick={() => setShow(true)}>
              <Heart />
            </button>
            <button>
              <MessageSquare className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center justify-between gap-10">
            <button>
              <Bookmark className="h-5 w-5" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <Share className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem className="cursor-pointer">
                  <X className="mr-2 h-4 w-4" />
                  <span>X.com</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  <span>Linkedin</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Link className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {show && (
          <div className="relative mx-10 w-full max-w-full mt-6">
            <Avatar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Input
              className="h-10 pl-12 rounded-full w-full focus-visible:ring-0 focus-visible:ring-offset-0 bg-zinc-50 dark:bg-zinc-900"
              type="email"
              placeholder="Post your comment"
            />
          </div>
        )}
      </CardFooter>
    </>
  );
};

export default PostContent;
