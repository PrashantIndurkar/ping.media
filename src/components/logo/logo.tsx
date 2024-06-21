"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/feed"
      className="md:hidden flex items-center gap-2 font-semibold"
    >
      <Image
        src="/images/ping-logo.png"
        width={100}
        height={100}
        alt="Ping Logo"
        className="ml-4"
      />
    </Link>
  );
};
