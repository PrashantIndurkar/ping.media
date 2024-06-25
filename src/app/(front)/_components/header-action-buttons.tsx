"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const HeaderActionButtons = ({ user }: { user: any }) => {
  return (
    <div className="flex items-center justify-center gap-x-12">
      <button
        disabled
        className="rounded-full border py-2 px-8 border-zinc-600 hover:border-zinc-700  hover:text-zinc-700 text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400 transition group duration-200 cursor-not-allowed"
      >
        Skip login{" "}
        <GrFormNextLink className="inline group-hover:translate-x-1 transition-transform duration-200" />
      </button>

      {user ? (
        <Link href="/feed">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:!text-pink-100 !px-10"
          >
            Go to Feed
          </HoverBorderGradient>
        </Link>
      ) : (
        <Link href="/login">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:!text-pink-100 !px-10"
          >
            Login
          </HoverBorderGradient>
        </Link>
      )}
    </div>
  );
};

export default HeaderActionButtons;
