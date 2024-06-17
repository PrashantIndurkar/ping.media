import Env from "@/config/env";
import { headers } from "next/headers";

export const getNotifications = async () => {
  const res = await fetch(`${Env.APP_URL}/api/notifications`, {
    cache: "no-cache",
    headers: new Headers(headers()),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch notifications from server");
  }
  const response = await res.json();
  return response?.data;
};
