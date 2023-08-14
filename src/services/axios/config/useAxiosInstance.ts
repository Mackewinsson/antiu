import { useAuth } from "@clerk/nextjs";
import axios from "axios";

export const useAxiosInstance = () => {
  const auth = useAuth();
  const Instance = axios.create({
    baseURL: "http://localhost:9090/api",
  });

  Instance.interceptors.request.use(
    async (config) => {
      const token = await auth.getToken({
        template: "integration_firebase",
      });

      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return { Instance };
};
