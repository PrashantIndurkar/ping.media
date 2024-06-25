import { Spotlight } from "@/components/ui/Spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import React from "react";
import { getAuthSession } from "./api/auth/[...nextauth]/options";
import HeaderActionButtons from "./(front)/_components/header-action-buttons";
import { words } from "@/constants/home-flip-words";

const Web = async () => {
  // check if user is logged in if logged in then show the button text as feed else show login and also redirect accordingly
  const user = await getAuthSession();
  console.log("user", user);

  return (
    <div className="h-screen relative">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="h-screen  w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div>
            <Image
              src="/images/ping-logo.png"
              alt="Ping Logo"
              width={200}
              height={200}
            />
          </div>
          <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 py-8 text-center">
            Social Media Platform <br />
            for{" "}
            <FlipWords
              words={words}
              className="md:tracking-wide md:leading-relaxed"
            />
          </div>
          <HeaderActionButtons user={user} />
        </div>
      </div>
    </div>
  );
};

export default Web;
