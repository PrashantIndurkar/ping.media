import prisma from "@/DB/db.config";
import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ status: 401, message: "Un-Authorized" });
  }
  const users = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
    select: {
      name: true,
      id: true,
      email: true,
      username: true,
      Post: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          Likes: {
            take: 1,
            where: {
              userId: Number(session?.user?.id),
            },
          },
        },
      },
      Comment: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      },
    },
  });

  return NextResponse.json({ status: 200, data: users });
}
