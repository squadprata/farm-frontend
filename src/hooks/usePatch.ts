import { api } from "@/services/api";
import axios from "axios";

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
    
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
    try {
      const result = await axios.patch(
        `${baseURL}${endpoint}`, body, { 
          headers: { headers }
        }
      ).then(resp => resp.data)

      return (result)
    } catch (error) {
      console.log("Error in patchData: ", error)
      throw error
    }
  }

  const response = await patch();

  return await response;
};
