import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/database";
import { AuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";

// AuthOptions
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@youremail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "At least 8 characters.",
        },
      },
      // authorize: validates the provided credentials and returns user data if authentication is successful.
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!existingUser) {
          return null;
        }

        if (existingUser.password) {
          const isPasswordMatch = await compare(
            credentials?.password,
            existingUser.password
          );

          if (!isPasswordMatch) {
            return null;
          }
        }

        return {
          id: existingUser.id.toString(),
          name: existingUser.name,
          email: existingUser.email,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // First time JWT callback is called, user object will be available
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Safely handle session.user being potentially undefined
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email;
      } else {
        session.user = {
          id: token.id as string,
          name: token.name,
          email: token.email,
        };
      }
      return session;
    },
  },
};

// Helper function to get the user's session from the server
export const getAuthSession = () => getServerSession(authOptions);
