import { useAxiosInstance } from "./axios/config/useAxiosInstance";

export const useAuthService = () => {
  const { Instance } = useAxiosInstance();
  async function firebaseLogin(user: any) {
    const response = await Instance.post("/auth/login", {
      email: user.user.primaryEmailAddress?.emailAddress,
    });
    return response.data;
  }

  async function verify() {
    const response = await Instance.get("/auth/login");
    return response.data;
  }

  return { firebaseLogin, verify };
};
