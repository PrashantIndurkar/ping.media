import { db } from "@/database";
import { CustomErrorReporter } from "@/validations/CustomErrorReporter";
import { loginSchema } from "@/validations/registerSchema";
import vine, { errors } from "@vinejs/vine";
import { compareSync } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // TODO vine: Learn more about this errorReporter

    vine.errorReporter = () => new CustomErrorReporter();

    const validator = vine.compile(loginSchema);
    const payload = await validator.validate(data);

    // * Check email
    const findUser = await db.user.findUnique({
      where: {
        email: payload.email,
      },
    });

    if (!findUser) {
      return NextResponse.json({
        status: 400,
        errors: {
          email: "No Account Found with this email",
        },
      });
    }

    // * Check password
    const checkPassword = compareSync(payload.password, findUser.password!);

    if (checkPassword) {
      return NextResponse.json({
        status: 200,
        message: "User logged in successfully!",
      });
    }

    return NextResponse.json({
      status: 400,
      errors: {
        email: "Invalid Credentials!",
      },
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log("error.messages", error.messages);
      return NextResponse.json({ status: 400, error: error.messages });
    }
  }
}
