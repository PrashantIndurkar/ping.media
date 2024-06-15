"use client";
import { Spotlight } from "@/components/ui/Spotlight";

import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const Web = () => {
  const words = ["Developers", "Designers", "Engineers", "Job   Seekers"];

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
              src="/images/PingLogo.png"
              alt="Ping Logo"
              width={200}
              height={200}
            />
          </div>
          <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 py-8 text-center">
            Social Media Platform <br />
            for <FlipWords words={words} />
          </div>
          <div className="flex items-center justify-center gap-x-12">
            <button className="rounded-full border py-2 px-8 border-zinc-600 hover:border-zinc-700  hover:text-zinc-700 text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400 transition group duration-200">
              Skip login{" "}
              <GrFormNextLink className="inline group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:!text-pink-100 !px-10"
            >
              <Link href="/login">Login</Link>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
