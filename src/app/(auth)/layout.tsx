import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { people } from "@/utils/data/people-db";
import Image from "next/image";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 sm:px-20 mx-auto flex items-center justify-center max-w-[80rem] flex-col md:flex-row h-screen gap-x-12">
      <div className="hidden xl:flex flex-col md:items-start items-center justify-center space-y-12 w-1/2 ">
        <div className="flex gap-x-4 items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Ping Logo"
            width={55}
            height={55}
          />
          <h1 className="text-4xl font-semibold max-w-lg leading-relaxed">
            PingMedia
          </h1>
        </div>
        <h1 className="text-5xl max-w-lg leading-relaxed md:leading-relaxed font-instrumentSerif md:tracking-wider italic">
          Connect with top-tier Engineers & designers!
        </h1>
        <div className="flex items-start justify-center flex-col space-y-6">
          <div className="flex flex-row items-center justify-center">
            <AnimatedTooltip items={people} />
          </div>
          <span className="text-sm inline-block text-zinc-400">
            Join our community of 50+ Ping members!
          </span>
        </div>
      </div>
      <div className="w-full md:w-2/4 lg:w-1/2">{children}</div>
    </div>
  );
}
