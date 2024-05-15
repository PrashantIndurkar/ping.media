import { registerSchema } from "@/validations/registerSchema";
import vine from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const validator = vine.compile(registerSchema);

  const payload = await validator.validate(data);
}
