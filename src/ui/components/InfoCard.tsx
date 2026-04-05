import { Box, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const InfoCard = ({
  title,
  description,
  code,
}: {
  title: string;
  description: string;
  code?: string;
}) => {
  return (
    <Box
      sx={{
        margin: "20px auto",
        padding: "50px",
        border: "1px solid #ccc",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "2rem", marginBottom: "10px" }}>
        {title}
      </Typography>

      <Typography variant="body1">{description}</Typography>

      {code && <SyntaxHighlighter language="graphql">{code}</SyntaxHighlighter>}
    </Box>
  );
};

export default InfoCard;
