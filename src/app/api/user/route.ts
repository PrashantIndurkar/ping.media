import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { db } from "@/database";

export async function GET(req: NextRequest) {
  const session: CustomSession | null = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({
      status: 401,
      message: "You must be logged in to view this page",
    });
  }
  const users = await db.user.findMany({
    where: {
      NOT: {
        id: Number(session?.user?.id),
      },
    },
    select: {
      id: true,
      name: true,
      username: true,
    },
  });

  return NextResponse.json({ status: 200, data: users });
}
