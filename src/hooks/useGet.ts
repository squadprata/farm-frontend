import { api } from "@/services/api";

export const getData = async ({
  endpoint,
  params,
  headers,
}: {
  endpoint: string;
  params?: any;
  headers?: any;
}) => {
  async function get() {
    try {
      const result = await api.get(endpoint, { params, headers });
      return await result.data;
    } catch (err) {
      console.error("Error in useGet:", err);
      throw err;
    }
  }

  const response = await get();

  return await response;
};
