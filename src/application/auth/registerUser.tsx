import { registerUserRequest } from "../../infraestructure/auth/authApi";

export const registerUser = async (email: string, password: string) => {
  const userRegister = await registerUserRequest(email, password);
  return userRegister;
};
