import { AppProvider } from "@toolpad/core/AppProvider";
import {
  SignInPage,
  type AuthProvider,
  type AuthResponse,
} from "@toolpad/core/SignInPage";

const providers = [
  { id: "google", name: "Google" },
  { id: "credentials", name: "Email and Password" },
];

const signIn = async (provider: AuthProvider): Promise<AuthResponse> => {
  if (provider.id === "google") {
    //logica google
  }
  if (provider.id === "credentials") {
    //logica credentials
  }
  return { error: "" };
};

const LoginPage = () => {
  return (
    <AppProvider>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
  );
};

export default LoginPage;
