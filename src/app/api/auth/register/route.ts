import { db } from "@/database";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import * as z from "zod";

// Define a schema for the request body

const userRegisterSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters long"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = userRegisterSchema.parse(body);

    // Check if the email already exists
    const isEmailExist = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (isEmailExist) {
      return NextResponse.json({
        user: null,
        status: 400,
        message: "Email already exists",
      });
    }

    // Create user in the database
    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({
      user: rest,
      status: 201,
      message: "User created successfully!",
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Something went wrong!" });
  }
}
