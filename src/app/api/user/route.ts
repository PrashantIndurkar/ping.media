import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database";
import { getAuthSession } from "../auth/[...nextauth]/options";

export async function GET(req: NextRequest) {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({
      status: 401,
      message: "You must be logged in to view this page",
    });
  }
  const users = await db.user.findMany({
    where: {
      NOT: {
        id: session?.user?.id,
      },
    },
    select: {
      id: true,
      name: true,
    },
  });

  return NextResponse.json({ status: 200, data: users });
}
