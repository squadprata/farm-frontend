import { api } from "@/services/api";

export const putData = async ({
  endpoint,
  body,
  headers,
}: {
  endpoint: string;
  body: any;
  headers?: any;
}) => {
  async function put() {
    try {
      const result = await api.put(endpoint, body, { headers });
      return await result.data;
    } catch (err) {
      console.error("Error in usePut:", err);
      throw err;
    }
  }

  const response = await put();

  return await response;
};
