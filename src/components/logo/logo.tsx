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
        src="/images/logo.png"
        width={25}
        height={25}
        alt="Ping Logo"
        className="ml-4"
      />
      <h1 className="text-xl font-semibold">Ping</h1>
    </Link>
  );
};
