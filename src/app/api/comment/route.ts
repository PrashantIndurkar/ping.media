import { CustomErrorReporter } from "@/validations/CustomErrorReporter";
import { postSchema } from "@/validations/postSchema";
import vine, { errors } from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

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

    //   validation
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(postSchema);
    const payload = await validator.validate(data);
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log("error.messages", error.messages);
      return NextResponse.json({ status: 400, error: error.messages });
    }
  }
}
