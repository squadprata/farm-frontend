import { api } from "./api";

export const authRequest = {
  login: async (data: { email: string; password: string }) => {
    return await api.post("/login", data);
  },
};
