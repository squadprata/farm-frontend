import { api } from "@/services/api";
import axios from "axios";

export const deleteData = async ({
  endpoint,
  headers,
}: {
  endpoint: string;
  headers?: any;
}) => {
  async function del() {

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
    try {
      const result = await axios.delete(
        `${baseURL}${endpoint}`, { headers: { headers } }
      ).then(resp => resp.data)

      return (result)
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error
    }
  }

  const response = await del();

  return await response;
};
