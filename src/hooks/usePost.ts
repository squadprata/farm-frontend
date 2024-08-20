import { api } from "@/services/api";
//o usePost é uma função async e não deve ser chamado diretamente  
//dentro de funções de evento como onSubmit.
//por isso mudei o nome para postData
export const postData = async ({
  endpoint,
  body,
  headers,
}: {
  endpoint: string;
  body: any;
  headers: any;
}) => {
  async function post() {
    try {
      // const result = await api.post(endpoint, body)
      const result = await api.post(endpoint, body, { headers });
      return await result.data;
    } catch (err) {
      console.error("Error in postData:", err);
      throw err;
    }
  }

  const response = await post();

  return await response;
};
