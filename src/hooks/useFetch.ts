"use client";

import { useState, useEffect } from "react";
import { fetchFromAPI } from "@/services/api";

type FetchDataResult<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

export const useFetch = <T>(endpoint: string): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFromAPI<T>(endpoint);
        setData(result);
        setLoading(false);
      } catch (err) {
        console.error("Error in useFetchData:", err);
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};
