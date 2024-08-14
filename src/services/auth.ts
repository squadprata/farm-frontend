import { api } from "./api";

interface LoginData {
  email: string;
  password: string;
}

export const authRequest = {
  login: async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      if (!response.data) {
        throw new Error("Resposta inesperada da API.");
      }
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro ao fazer a solicitação:", error.message);
        throw new Error(`Erro ao fazer a solicitação: ${error.message}`);
      } else {
        console.error("Erro:", error);
        throw new Error("Erro ao fazer a solicitação.");
      }
    }
  },
};
