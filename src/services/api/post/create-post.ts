"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreatePostSchema } from "@/validations/postSchema";
import { getUserId } from "@/utils/getUserId";
import { db } from "@/database";

export async function createPost(data: z.infer<typeof CreatePostSchema>) {
  const userId = await getUserId();

  const validateFields = CreatePostSchema.safeParse(data);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Post",
    };
  }

  const { content, imageUrl } = validateFields.data;

  // Create Post
  try {
    await db.post.create({
      data: {
        content,
        imageUrl: imageUrl,
        author: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    return {
      message: "Database Error. Failed to Create Post",
    };
  }

  revalidatePath("/feed");
  redirect("/feed");
}
