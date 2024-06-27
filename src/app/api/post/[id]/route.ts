import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database";
import { join } from "path";
import { rmSync } from "fs";
import { getAuthSession } from "../../auth/[...nextauth]/options";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({ status: 401, message: "Un-Authorized" });
  }
  const post = await db.post.findUnique({
    where: {
      id: params.id,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
        },
      },
      comments: {
        include: {
          author: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      likes: {
        take: 1,
        where: {
          userId: session?.user?.id,
        },
      },
    },
  });

  return NextResponse.json({ status: 200, data: post });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({ status: 401, message: "Un-Authorized" });
  }

  const findPost = await db.post.findFirst({
    where: {
      id: params.id,
      authorId: session?.user?.id,
    },
  });

  if (!findPost) {
    return NextResponse.json({ status: 400, message: "Bad Request" });
  }

  // * remove the file
  if (findPost.imageUrl !== "" && findPost.imageUrl !== null) {
    const dir = join(process.cwd(), "public", "/uploads");
    const path = dir + "/" + findPost?.imageUrl;
    rmSync(path, { force: true });
  }

  await db.post.delete({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Post deleted successfully!",
  });
}
