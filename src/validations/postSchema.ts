// import vine from "@vinejs/vine";
import { z } from "zod";

// export const postSchema = vine.object({
//   content: vine.string().trim().minLength(1),
// });

export const PostSchema = z.object({
  id: z.string(),
  imageUrl: z.string().optional(),
  content: z.string().min(1),
});

export const CreatePostSchema = PostSchema.omit({ id: true });

export const UpdatePostSchema = PostSchema;

export const DeletePostSchema = PostSchema.pick({ id: true });

export const LikeSchema = z.object({
  postId: z.string(),
});
