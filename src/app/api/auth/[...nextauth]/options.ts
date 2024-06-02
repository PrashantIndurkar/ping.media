import prisma from "@/DB/db.config";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
          select: {
            id: true,
            email: true,
            name: true,
            username: true,
          },
        });

        if (user) {
          return { ...user, id: user.id.toString() };
        } else {
          return null;
        }
      },
    }),
  ],
};
