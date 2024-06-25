import { CustomErrorReporter } from "../../../../validations/CustomErrorReporter";
import { registerSchema } from "@/validations/registerSchema";
import vine, { errors } from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";
import bcrypt, { hashSync } from "bcryptjs";
import { db } from "@/database";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    vine.errorReporter = () => new CustomErrorReporter();

    const validator = vine.compile(registerSchema);
    const payload = await validator.validate(data);

    // * Check email
    const isEmailExist = await db.user.findUnique({
      where: {
        email: payload.email,
      },
    });

    if (isEmailExist) {
      return NextResponse.json({
        status: 400,
        errors: {
          email: "Email already exist",
        },
      });
    }

    // * Check username
    const isUsernameExist = await db.user.findUnique({
      where: {
        username: payload.username,
      },
    });

    if (isUsernameExist) {
      return NextResponse.json({
        status: 400,
        errors: {
          username: "Username already exist",
        },
      });
    }

    // TODO: hash password
    const salt = bcrypt.genSaltSync(10);
    payload.password = hashSync(payload.password, salt);

    // * Inset user into database
    await db.user.create({
      data: payload,
    });

    return NextResponse.json({
      status: 200,
      message: "Account created successfully!",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log("error.messages", error.messages);
      return NextResponse.json({ status: 400, error: error.messages });
    }
  }
}
