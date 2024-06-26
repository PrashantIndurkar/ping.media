"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getAvatarFallbackName } from "@/utils/avatar-fallback-name";
import { User } from "next-auth";
import { useRouter } from "next/navigation";
import { AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {
  name: string;
  imageUrl: string;
  email: string;
  url: string;
}

export const UserAvatar = ({
  name,
  imageUrl,
  email,
  url,
  ...props
}: UserAvatarProps) => {
  const router = useRouter();

  return (
    <Avatar
      {...props}
      className={props.className}
      onClick={(e) => {
        e.stopPropagation();
        router.push(`${url}`);
      }}
    >
      <AvatarImage
        alt={name ?? ""}
        src={imageUrl ?? "/app-images/emptyDP.png"}
      />
      <AvatarFallback className={props.className}>
        {getAvatarFallbackName(email ?? "")}
      </AvatarFallback>
    </Avatar>
  );
};
