import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authRequest } from "./services/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials: any) => {
        console.log("credentials", credentials);
        try {
          const response = await authRequest.login(credentials);
          if (!response.data) return null;

          return response.data;
        } catch (error) {
          throw new Error(
            `User not found. ${JSON.stringify(error?.response?.data)}`
          );
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
