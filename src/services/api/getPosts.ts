import Env from "@/config/env";
import { headers as getHeaders } from "next/headers";

export async function getPosts() {
  try {
    const headersList = getHeaders();
    const res = await fetch(`${Env.APP_URL}/api/post`, {
      cache: "no-cache",
      headers: new Headers(headersList as any),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Posts from server");
    }

    const response = await res.json();
    return response?.data;
  } catch (error) {
    throw error;
  }
}
