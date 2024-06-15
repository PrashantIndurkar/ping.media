import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/feed"
      className="md:hidden flex items-center gap-2 font-semibold"
    >
      <Image
        src="/images/PingLogo.png"
        width={100}
        height={100}
        alt="Ping Logo"
        className="ml-4"
      />
    </Link>
  );
};

export default Logo;
