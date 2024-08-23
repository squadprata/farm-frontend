import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { api } from "@/services/api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log("credentials", credentials);

        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new Error("Por favor, forneça tanto o email quanto a senha.");
        }

        try {
          const response = await api.post("/login", { email, password });

          if (!response.data) {
            throw new Error("Resposta inesperada da API.");
          }

          return response.data;
        } catch (error) {
          console.error("Erro na autenticação:", error);
          throw new Error("Falha na autenticação. Verifique suas credenciais.");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login-adm",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/admin";
    },
  },
});
