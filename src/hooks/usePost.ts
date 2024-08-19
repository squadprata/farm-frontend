import { api } from "@/services/api";

export const usePost = async ({endpoint, body, headers}:{endpoint: string, body: any, headers: any}) => {
    
    async function post(){
        try {            
            // const result = await api.post(endpoint, body)
            const result = await api.post(endpoint, body, {headers})
            return await result.data
        } catch (err) {
            console.error("Error in usePost:", err)
            throw err;
        }
    };

    const response = await post();
    

    return await response;
};
