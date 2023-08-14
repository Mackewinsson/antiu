import { useAxiosInstance } from "./axios/config/useAxiosInstance";

export const useAuthService = () => {
  const { Instance } = useAxiosInstance();

  async function firebaseLogin() {
    const response = await Instance.patch("/auth/login");
    return response.data;
  }

  async function verify() {
    const response = await Instance.get("/auth/login");
    return response.data;
  }

  return { firebaseLogin, verify };
};
