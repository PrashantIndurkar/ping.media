import { CustomErrorReporter } from "@/validations/CustomErrorReporter";
import vine, { errors } from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { commentSchema } from "@/validations/commentSchema";
import prisma from "@/DB/db.config";

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

    await prisma.$transaction(async (prisma) => {
      // we need to increment the post comment count
      await prisma.post.update({
        where: {
          id: Number(payload.post_id),
        },
        data: {
          comment_count: {
            increment: 1,
          },
        },
      });

      // * Add Notification

      await prisma.notification.create({
        data: {
          user_id: Number(session?.user?.id),
          toUser_id: Number(payload.toUserId),
          content: "Commented on your post.",
        },
      });

      // add comment in the database

      await prisma.comment.create({
        data: {
          user_id: Number(session?.user?.id),
          post_id: Number(payload.post_id),
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
