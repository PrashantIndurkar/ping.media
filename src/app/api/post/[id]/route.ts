import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import prisma from "@/DB/db.config";
import { join } from "path";
import { rmSync } from "fs";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ status: 401, message: "Un-Authorized" });
  }
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
      Comment: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
        },
      },
      Likes: {
        take: 1,
        where: {
          user_id: Number(session?.user?.id),
        },
      },
    },
  });

  return NextResponse.json({ status: 200, data: post });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ status: 401, message: "Un-Authorized" });
  }

  const findPost = await prisma.post.findFirst({
    where: {
      id: Number(params.id),
      user_id: Number(session?.user?.id),
    },
  });

  if (!findPost) {
    return NextResponse.json({ status: 400, message: "Bad Request" });
  }

  // * remove the file
  if (findPost.image !== "" && findPost.image !== null) {
    const dir = join(process.cwd(), "public", "/uploads");
    const path = dir + "/" + findPost?.image;
    rmSync(path, { force: true });
  }

  await prisma.post.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Post deleted successfully!",
  });
}
