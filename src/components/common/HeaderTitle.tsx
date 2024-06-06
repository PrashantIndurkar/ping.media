import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderTitle = ({
  title,
  back = false,
}: {
  title?: string;
  back?: boolean;
}) => {
  return (
    <div className="flex items-center justify">
      {!back && (
        <Link
          href="/"
          className="hidden md:flex items-center border border-zinc-200 dark:border-zinc-700 rounded-full p-1.5 mr-4"
        >
          <ArrowLeft className="text-zinc-700 dark:text-zinc-300" />
        </Link>
      )}
      <h3 className="text-lg font-medium ml-auto md:ml-0">{title}</h3>
    </div>
  );
};

export default HeaderTitle;
