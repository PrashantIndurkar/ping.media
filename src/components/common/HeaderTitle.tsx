"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const HeaderTitle = ({
  title,
  back = false,
}: {
  title?: string;
  back?: boolean;
}) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify">
      {!back && (
        <button
          onClick={() => router.back()}
          className="hidden md:flex items-center border border-zinc-200 dark:border-zinc-700 rounded-full p-1.5 mr-4"
        >
          <ArrowLeft className="text-zinc-700 dark:text-zinc-300" />
        </button>
      )}
      <h3 className="text-lg font-medium ml-auto md:ml-0">{title}</h3>
    </div>
  );
};

export default HeaderTitle;
