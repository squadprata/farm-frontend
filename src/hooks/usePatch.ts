import { api } from "@/services/api";

export const patchData = async ({
  endpoint,
  body,
  headers,
}: {
  endpoint: string;
  body: any;
  headers?: any;
}) => {
  async function patch() {
    try {
      // Faz a requisição PATCH usando a instância `api`, passando o corpo e os cabeçalhos opcionais
      const result = await api.patch(endpoint, body, { headers });
      return await result.data;
    } catch (err) {
      console.error("Error in usePatch:", err);
      throw err;
    }
  }

  const response = await patch();

  return await response;
};
