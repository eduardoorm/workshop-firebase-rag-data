import { loginRequest } from "../../infraestructure/auth/authApi";

export const loginUser = async (email: string, password: string) => {
  const user = await loginRequest(email, password);
  return user;
};

