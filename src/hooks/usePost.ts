import { useState, useEffect } from "react";
import { api, fetchFromAPI } from "@/services/api";

type FetchDataResult<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
};

export const usePost = async ({endpoint, body}:{endpoint: string, body: any[]}) => {
    
    async function post(){
        try {            
            const result = await api.post(endpoint, body)
            return await result.data
        } catch (err) {
            console.error("Error in useFetchData:", err)
            return err
        }
    };

    const response = await post();
    

    return await response;
};
