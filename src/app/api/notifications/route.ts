import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { db } from "@/database";

export async function GET(request: NextRequest) {
  const session: CustomSession | null = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ status: 401, message: "Un Authorized." });
  }

  const notifications = await db.notification.findMany({
    where: {
      toUser_id: Number(session?.user?.id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  return NextResponse.json({ status: 200, data: notifications });
}
