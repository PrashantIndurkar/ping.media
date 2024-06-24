import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/options";

// GET /api/post
export async function GET(request: NextRequest) {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({
      status: 401,
      message: "You are not logged in",
    });
  }
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
      Likes: {
        take: 1,
        where: {
          userId: Number(session?.user?.id),
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  return NextResponse.json({
    status: 200,
    data: posts,
  });
}
