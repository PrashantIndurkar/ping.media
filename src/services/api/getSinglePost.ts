import Env from "@/config/env";
import { headers } from "next/headers";

export async function getSinglePost(id: string) {
  const res = await fetch(`${Env.APP_URL}/api/post/${id}`, {
    cache: "no-cache",
    headers: new Headers(headers()),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Single Post from server");
  }
  const response = await res.json();
  return response?.data;
}
