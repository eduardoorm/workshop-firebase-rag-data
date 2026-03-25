import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import type { User } from "../../domain/User";

const auth = getAuth(app);

export const loginRequest = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );

  const userFirebase = userCredential.user;

  const user: User = {
    name: userFirebase.displayName?.split(" ")[0] ?? "",
    lastName: userFirebase.displayName?.split(" ")[1] ?? "",
    email: userFirebase.email ?? "",
    password: "",
    status: 1,
  };

  return user;
};

export const registerUserRequest = async (email: string, password: string) => {
  const createdUser = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  const user: User = {
    email: createdUser.user.email ?? "",
  };

  return user;
};
