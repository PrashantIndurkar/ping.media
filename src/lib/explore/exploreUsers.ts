import Env from "@/config/env";
import { headers } from "next/headers";

export const exploreUsers = async (query: string) => {
  const res = await fetch(`${Env.APP_URL}/api/explore?query=${query}`, {
    cache: "no-cache",
    headers: headers(),
  });

  if (!res.ok) {
    return new Error("Failed to fetch users");
  }

  const response = await res.json();
  return response.data;
};
