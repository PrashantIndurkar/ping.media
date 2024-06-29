"use server";

import { getUserId } from "@/utils/getUserId";
import { DeletePostSchema } from "@/validations/postSchema";
import { db } from "@/database";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";

export async function deletePost(data: z.infer<typeof DeletePostSchema>) {
  const userId = await getUserId();

  const validateFields = DeletePostSchema.safeParse(data);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Delete Post",
    };
  }

  const { id } = validateFields.data;

  // check post before deleting
  const post = await db.post.findUnique({
    where: {
      id,
      authorId: userId.toString(),
    },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  try {
    await db.post.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return { message: "Database Error. Failed to Delete Post" };
  }

  revalidatePath("/feed");
  redirect("/feed");
}
