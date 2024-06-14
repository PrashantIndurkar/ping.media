import Env from "@/config/env";
import { headers } from "next/headers";

export async function getUser(id: number) {
  const res = await fetch(`${Env.APP_URL}/api/user/${id}`, {
    cache: "no-cache",
    headers: headers(),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Posts from server");
  }
  const response = await res.json();
  return response?.data;
}
