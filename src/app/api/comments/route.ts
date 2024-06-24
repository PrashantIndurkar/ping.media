import { CustomErrorReporter } from "@/validations/CustomErrorReporter";
import vine, { errors } from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { commentSchema } from "@/validations/commentSchema";
import { db } from "@/database";

export async function POST(request: NextRequest) {
  try {
    const session: CustomSession | null = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({
        status: 401,
        message: "You are not logged in",
      });
    }

    const data = await request.json();

    // validation
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(commentSchema);
    const payload = await validator.validate(data);

    await db.$transaction(async (db) => {
      // we need to increment the post comment count
      await db.post.update({
        where: {
          id: Number(payload.post_id),
        },
      });

      // * Add Notification

      await db.notification.create({
        data: {
          userId: session?.user?.id?.toString(),
          toUserId: payload.toUserId.toString(),
          content: "Commented on your post.",
        },
      });

      // add comment in the database

      await db.comment.create({
        data: {
          authorId: session?.user?.id?.toString(),
          postId: payload.post_id.toString(),
          content: payload.content,
        },
      });
    });

    return NextResponse.json({
      status: 200,
      message: "Comment added successfully",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log("error.messages", error.messages);
      return NextResponse.json({ status: 400, error: error.messages });
    }
  }
}
