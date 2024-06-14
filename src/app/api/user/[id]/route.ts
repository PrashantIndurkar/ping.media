import prisma from "@/DB/db.config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
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
