import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import vine, { errors } from "@vinejs/vine";
import { CustomErrorReporter } from "@/validations/CustomErrorReporter";
import { postSchema } from "@/validations/postSchema";
import { join } from "path";
import { getRandomNumber } from "@/lib/utils";
import { writeFile } from "fs/promises";
import prisma from "@/DB/db.config";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { imageValidator } from "@/validations/imageValidator";

// GET /api/post
export async function GET(request: NextRequest) {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({
      status: 401,
      message: "You are not logged in",
    });
  }
  const posts = await prisma.post.findMany({
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

  return NextResponse.json({
    status: 200,
    data: posts,
  });
}

// only authenticated users can access this endpoint
export async function POST(request: NextRequest) {
  try {
    // * Get session -----------------------------------------------
    const session: CustomSession | null = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({
        status: 401,
        message: "You are not logged in",
      });
    }
    // ------------------------------------------------------------

    // * Get formData from request --------------------------------
    const formData = await request.formData();

    // vine only accepts json data we need to convert the formData to json
    const data = {
      content: formData.get("content"),
      image: "",
    };

    /* 
      VineJS uses error reporters to collect errors during the validation lifecycle. A reporter decides the formatting of errors you will get after the validate method call.
    */
    vine.errorReporter = () => new CustomErrorReporter();
    const validator = vine.compile(postSchema);
    const payload = await validator.validate(data);
    const image = formData.get("image") as File | null;

    // We need to validate the image with custom validation
    if (image) {
      // we need to validate the image name and size
      const isImageNotValid = imageValidator(image.name, image.size);

      if (isImageNotValid) {
        return NextResponse.json({
          status: 400,
          errors: {
            content: isImageNotValid,
          },
        });
      }

      // Upload image
      try {
        const buffer = Buffer.from(await image.arrayBuffer());
        const uploadedDir = join(process.cwd(), "public", "/uploads");
        const uniqueFileName = Date.now() + "_" + getRandomNumber(1, 999999);
        const imageExt = image.name.split(".");
        const fileName = uniqueFileName + "." + imageExt[1];
        await writeFile(`${uploadedDir}/${fileName}`, buffer);
        data.image = fileName;
      } catch (error) {
        return NextResponse.json({
          status: 500,
          message: "Error while uploading image... Please try again.",
        });
      }
    }

    // Create Post In DB
    await prisma.post.create({
      data: {
        content: payload.content,
        user_id: Number(session?.user?.id),
        image: data.image ?? null,
      },
    });

    return NextResponse.json({
      status: 200,
      message: "Post created successfully!",
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log("error.messages", error.messages);
      return NextResponse.json({ status: 400, error: error.messages });
    }
  }
}
