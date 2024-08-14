import axios from "axios";

const getToken = async () => {
  try {
    const token = await api.get("/api/token").then((res) => res.data);
    return token;
  } catch (error) {
    console.log("Erro ao obter o token", error);
    return null;
  }
};

export const api = axios.create({
  baseURL: "https://farm-api-s4jq.onrender.com" ?? "http://localhost:3001",
});

api.interceptors.request.use(
  async (config) => {
    if (
      config.url &&
      (config.url.includes("/login") || config.url.includes("/cadastro")) &&
      config.method === "post"
    ) {
      return config;
    }

    const token = await getToken();
    console.log(token);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token.body.csrfToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        alert("Ocorreu um erro, realize o login novamente!");
      } else if (status === 500) {
        alert("Ocorreu um erro interno, tente fazer a ação novamente.");
      }
    }
    return Promise.reject(error);
  }
);

export const fetchFromAPI = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await api.get<T>(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Error fetching data: ${(error as Error).message}`);
  }
};
