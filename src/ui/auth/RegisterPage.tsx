import { Button, Box, TextField } from "@mui/material";
import { loginUser } from "../../application/auth/loginUser";

const RegisterPage = () => {
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const email = (e.target as HTMLFormElement).email.value;
      const password = (e.target as HTMLFormElement).password.value;
      await loginUser(email, password);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 2,
        width: 300,
        margin: "0 auto",
      }}
      component="form"
      onSubmit={handleRegister}
    >
      <TextField
        id="email"
        label="Email"
        aria-describedby="Enter your email"
        fullWidth
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        aria-describedby="Enter your password"
        fullWidth
      />
      <Button type="submit" color="primary" variant="contained">
        Register
      </Button>
    </Box>
  );
};

export default RegisterPage;
