"use client";
import { api } from "@/services/api";
import axios from "axios";
//o usePost é uma função async e não deve ser chamado diretamente  
//dentro de funções de evento como onSubmit.
//por isso mudei o nome para postData
export const postData = async ({
  endpoint,
  body,
  headers,
  params
}: {
  endpoint: string;
  body: any;
  headers?: any;
  params?: any;
}) => {
  console.log("Request body:", body);
  console.log("Request headers:", headers);

  async function post() {
    
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
    try {
      const result = await axios.post(
        `${baseURL}${endpoint}`, body, { 
          headers: { headers },
          params: { params }
        }
      )

      return (result)
    } catch (error) {
      console.log("Error in postData: ", error)
      throw error
    }
  }

  const response = await post();

  return await response;
};
