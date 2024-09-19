import { connectDB } from "@/libs/mongodb";
import { User } from "@/models/User";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        console.log("Credentials on backend", credentials)
        if (!credentials) {
          throw new Error("No credentials provided");
        }
        const { username, password } = credentials;
        // Find the user in the database
        const userFound = await User.findOne({ username }).select("+password");
        if (!userFound) {
          throw new Error("Invalid email or password");
        }
        // Compare the password
        const passwordMatch = await bcrypt.compare(password, userFound.password);
        if (!passwordMatch) {
          throw new Error("Invalid password");
        }
        // Create a plain object that aligns with NextAuth's expected user type
        const user = {
          id: userFound._id.toString(), // convert ObjectId to string
          username: userFound.username,
          createdAt: userFound.createdAt,
          updatedAt: userFound.updatedAt,
        };
        return user as any; // Assert the type to be compatible with NextAuth
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      // Keep your existing jwt logic
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }
  
      if (trigger === "update" && session?.email) {
        token.email = session.email;
      }
  
      if (user) {
        const u=user as unknown as any;
        console.log("User profilePicture in jwt:", u.profilePicture);
        return {
          ...token,
          id: u.id,
          username: u.username,
        };
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string, // Assert as string
          username: token.username as string, // Assert as string
        },
      };
    },
  },
};