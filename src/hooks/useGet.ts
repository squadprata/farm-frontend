import { api } from "@/services/api";
import axios from "axios";

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
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
    try {
      const result =await  axios.get(`${baseURL}${endpoint}`,{
        headers:{ headers },
        params: { params }
      })
      .then(resp => resp.data)
      return(result)
    }catch(error){
      console.log("Error in getData: ", error)
      throw null
    }
  }

  const response = await get();

  return await response;
};
