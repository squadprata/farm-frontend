import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authRequest } from "./services/auth";

export const {
  handlers: { POST, GET },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Credentials({
      authorize: async ({ email, password }: any) => {
        try {
          const response = await authRequest.login({ email, password });
          if (!response.data) return null;

          return response.data;
        } catch (error) {
          throw new Error("User not found.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login-adm",
    error: "/login-adm",
    signOut: "/login-adm",
    verifyRequest: "/login-adm",
    newUser: "/admin",
  },
});
