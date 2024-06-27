import { unstable_noStore as noStore } from "next/cache";
import { db } from "@/database";

export async function getPosts() {
  noStore();

  try {
    const posts = await db.post.findMany({
      include: {
        comments: {
          include: {
            author: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        likes: {
          include: {
            user: true,
          },
        },
        bookmarks: true,
        author: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return posts;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Database error : fetching posts");
  }
}
