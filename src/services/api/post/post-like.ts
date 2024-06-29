"use server";

import { db } from "@/database";
import { getUserId } from "@/utils/getUserId";
import { LikeSchema } from "@/validations/postSchema";
import { revalidatePath } from "next/cache";

export async function likePost(value: FormDataEntryValue | null) {
  const userId = await getUserId();

  const validatedFields = LikeSchema.safeParse({ postId: value });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Like Post.",
    };
  }

  const { postId } = validatedFields.data;

  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  const like = await db.postLike.findUnique({
    where: {
      userId_postId: {
        postId,
        userId,
      },
    },
  });

  if (like) {
    try {
      await db.postLike.delete({
        where: {
          userId_postId: {
            postId,
            userId,
          },
        },
      });
      revalidatePath("/dashboard");
      return { message: "Unliked Post." };
    } catch (error) {
      return { message: "Database Error: Failed to Unlike Post." };
    }
  }

  try {
    await db.postLike.create({
      data: {
        userId,
        postId,
      },
    });
    revalidatePath("/dashboard");
    return { message: "Liked Post." };
  } catch (error) {
    return { message: "Database Error: Failed to Like Post." };
  }
}
