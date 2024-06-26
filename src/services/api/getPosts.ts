import Env from "@/config/env";
import { headers as getHeaders } from "next/headers";

export async function getPosts() {
  try {
    const headersList = getHeaders();
    console.log("Fetching posts with headers:", headersList);
    const res = await fetch(`${Env.APP_URL}/api/post`, {
      cache: "no-cache",
      headers: new Headers(headersList as any),
    });

    if (!res.ok) {
      console.error(`Failed to fetch Posts from server: ${res.statusText}`);
      throw new Error("Failed to fetch Posts from server");
    }

    const response = await res.json();
    return response?.data;
  } catch (error) {
    console.error("An error occurred while fetching posts:", error);
    throw error;
  }
}
