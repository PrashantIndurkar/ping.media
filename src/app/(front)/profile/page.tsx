import Logo from "@/components/common/Logo";
import MobileSidebar from "@/components/common/MobileSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link as LinkIcon, MapPin, UserRoundCog } from "lucide-react";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <>
      <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 dark:bg-gray-900/15 z-10 flex items-center justify-betweens w-full ">
        <>
          <MobileSidebar />
          <Logo />
        </>
        <h3 className="text-lg font-medium ml-auto md:ml-0">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </h3>
      </header>
      <section className="mt-12 flex items-center justify-center">
        <Card className="border-none w-full rounded-none flex flex-col items-center justify-center">
          <CardHeader>
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Prashant Indurkar</CardTitle>
            <CardDescription className="cursor-pointer hover:underline">
              @Prashant
            </CardDescription>
            <CardDescription>Full Stack Developer</CardDescription>
            <div className="space-x-2 mt-6 text-zinc-400">
              <span className="items-center inline-flex">
                <UserRoundCog className="h-4 w-4 inline mr-1" />
                Member since 2021
              </span>
              <span className="items-center inline-flex">
                <MapPin className="h-4 w-4 inline mr-1" />
                Nanded, India
              </span>
              <Link
                href="https://prashantindurkar.vercel.app"
                className="hover:underline"
                target="_blank"
              >
                <LinkIcon className="h-4 w-4 inline mr-1" />
                prashantindurkar.vercel.app
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Profile;
