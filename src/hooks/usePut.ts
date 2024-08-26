import { api } from "@/services/api";
import axios from "axios";

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

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
    try {
      const result = await axios.patch(
        `${baseURL}${endpoint}`, body, { 
          headers: { headers }
        }
      ).then(resp => resp.data)

      return (result)
    } catch (error) {
      console.log("Error in putData: ", error)
      throw error
    }
  }

  const response = await put();

  return await response;
};
