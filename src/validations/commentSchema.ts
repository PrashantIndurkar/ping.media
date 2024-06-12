import vine from "@vinejs/vine";

export const commentSchema = vine.object({
  content: vine.string().trim().minLength(1),
  post_id: vine.string(),
});
