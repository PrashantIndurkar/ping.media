import Env from "@/config/env";
import { headers } from "next/headers";

export async function getUserComments() {
  const res = await fetch(`${Env.APP_URL}/api/user/comment`, {
    cache: "no-cache",
    next: {
      revalidate: 9000,
    },
    headers: headers(),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Comments from server");
  }
  const response = await res.json();
  return response?.data;
}
