import { db } from "@/database";
import { AuthOptions, ISODateString } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export type CustomSession = {
  user?: CustomUser;
  expires?: ISODateString;
};

export type CustomUser = {
  id: string | null;
  name?: string | null;
  username?: string | null;
  email?: string | null;
  created_at: ISODateString;
};

export const authOptions: AuthOptions = {
  // custom pages
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as CustomUser;
      return session;
    },
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // Credentials: It enables users to sign in using email and password credentials directly within your application.
      // only for sign in or login or sign up
      credentials: {
        email: {},
        password: { label: "Password", type: "password" },
      },
      // authorize: validates the provided credentials and returns user data if authentication is successful.
      async authorize(credentials, req) {
        const user = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
          select: {
            id: true,
            email: true,
            name: true,
            username: true,
            created_at: true,
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
