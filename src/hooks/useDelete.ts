import { api } from "@/services/api";

export const deleteData = async ({
  endpoint,
  headers,
}: {
  endpoint: string;
  headers?: any;
}) => {
  async function del() {
    try {
      const result = await api.delete(endpoint, { headers });
      return await result.data;
    } catch (err) {
      console.error("Error in useDelete:", err);
      throw err;
    }
  }

  const response = await del();

  return await response;
};
