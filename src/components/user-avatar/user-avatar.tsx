"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getAvatarFallbackName } from "@/utils/avatar-fallback-name";
import { User } from "next-auth";
import { useRouter } from "next/navigation";

interface UserAvatarProps {
  user: User | null;
  size?: string;
  url: string;
}

export const UserAvatar = ({
  user,
  url,
  size = "size-10",
}: UserAvatarProps) => {
  const router = useRouter();

  return (
    <Avatar
      className={`${size}`}
      onClick={(e) => {
        e.stopPropagation();
        router.push(`${url}`);
      }}
    >
      <AvatarImage
        alt={user?.name ?? ""}
        src={user?.image ?? "/app-images/emptyDP.png"}
      />
      <AvatarFallback className="text-sm">
        {getAvatarFallbackName(user?.name ?? "")}
      </AvatarFallback>
    </Avatar>
  );
};
