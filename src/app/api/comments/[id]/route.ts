import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ status: 401, message: "Un-Authorized" });
  }

  const findComment = await prisma.comment.findFirst({
    where: {
      id: Number(params.id),
      user_id: Number(session?.user?.id),
    },
  });

  if (!findComment) {
    return NextResponse.json({ status: 400, message: "Bad Request" });
  }
  // Begin a transaction to ensure atomicity
  await prisma.$transaction(async (prisma) => {
    // Delete the comment
    await prisma.comment.delete({
      where: {
        id: Number(params.id),
      },
    });

    // Decrement the comment_count of the associated post
    await prisma.post.update({
      where: {
        id: findComment.post_id,
      },
      data: {
        comment_count: {
          decrement: 1,
        },
      },
    });
  });

  return NextResponse.json({
    status: 200,
    message: "Comment deleted successfully!",
  });
}
