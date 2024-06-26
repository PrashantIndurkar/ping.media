import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";
import { CustomErrorReporter } from "@/validations/CustomErrorReporter";
// import { postSchema } from "@/validations/postSchema";
import { join } from "path";
import { writeFile } from "fs/promises";
import { db } from "@/database";
import { imageValidator } from "@/validations/imageValidator";
import { getRandomNumber } from "@/utils/random-number";
import { getAuthSession } from "../auth/[...nextauth]/options";

// TODO: rewrite this code using ZOD from VineJS
// GET /api/post
export async function GET(request: NextRequest) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const posts = await db.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
          },
        },
        comments: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
              },
            },
            replies: true,
            commentLikes: true,
          },
        },
        likes: true,
        bookmarks: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      status: 200,
      data: posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

// only authenticated users can access this endpoint
// export async function POST(request: NextRequest) {
//   try {
//     // * Get session -----------------------------------------------
//     const session = await getAuthSession();
//     if (!session?.user) {
//       return NextResponse.json({
//         status: 401,
//         message: "You are not logged in",
//       });
//     }
//     // ------------------------------------------------------------

//     // * Get formData from request --------------------------------
//     const formData = await request.formData();

//     // vine only accepts json data we need to convert the formData to json
//     const data = {
//       content: formData.get("content"),
//       image: "",
//     };

//     /*
//       VineJS uses error reporters to collect errors during the validation lifecycle. A reporter decides the formatting of errors you will get after the validate method call.
//     */
//     vine.errorReporter = () => new CustomErrorReporter();
//     const validator = vine.compile(postSchema);
//     const payload = await validator.validate(data);
//     const image = formData.get("image") as File | null;

//     // We need to validate the image with custom validation
//     if (image) {
//       // we need to validate the image name and size
//       const isImageNotValid = imageValidator(image.name, image.size);

//       if (isImageNotValid) {
//         return NextResponse.json({
//           status: 400,
//           errors: {
//             content: isImageNotValid,
//           },
//         });
//       }

//       // Upload image
//       try {
//         const buffer = Buffer.from(await image.arrayBuffer());
//         const uploadedDir = join(process.cwd(), "public", "/uploads");
//         const uniqueFileName = Date.now() + "_" + getRandomNumber(1, 999999);
//         const imageExt = image.name.split(".");
//         const fileName = uniqueFileName + "." + imageExt[1];
//         await writeFile(`${uploadedDir}/${fileName}`, buffer);
//         data.image = fileName;
//       } catch (error) {
//         return NextResponse.json({
//           status: 500,
//           message: "Error while uploading image... Please try again.",
//         });
//       }
//     }

//     // Create Post In DB
//     await db.post.create({
//       data: {
//         content: payload.content,
//         authorId: session?.user?.id,
//         imageUrl: data.image ?? null,
//       },
//     });

//     return NextResponse.json({
//       status: 200,
//       message: "Post created successfully!",
//     });
//   } catch (error) {
//     if (error instanceof errors.E_VALIDATION_ERROR) {
//       console.log("error.messages", error.messages);
//       return NextResponse.json({ status: 400, error: error.messages });
//     }
//   }
// }
