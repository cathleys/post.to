import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@models/user";
import bcrypt from "bcryptjs";
import connectDB from "@utils/connect-db";
import { Routes } from "@config/routes";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      credentials: {
        email: { type: "email", name: "email" },
        password: { type: "password", name: "password" },
      },

      async authorize(credentials) {
        //Check if the user exists.
        await connectDB();

        try {
          const user = await User.findOne({
            email: credentials?.email,
          });

          if (user && credentials) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("wrong credentials");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          console.error(err);
          throw new Error("Check your credentials");
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    // ...add more providers here
  ],
  pages: {
    error: Routes.login,
    signOut: Routes.home,
  },
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
