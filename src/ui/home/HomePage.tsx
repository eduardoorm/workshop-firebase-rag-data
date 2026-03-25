import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          margin: "20px auto",
          border: "1px solid green",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "2rem" }}>
          Construye agentes de IA basados en tus datos con Firebase Data Connect
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
