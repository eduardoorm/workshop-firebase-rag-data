import { Box, Container, Typography } from "@mui/material";

interface DestinationCardProps {
  name: string;
  imageUrl: string;
  description: string;
  tags?: string[];
}

const DestinationCard = ({
  name,
  imageUrl,
  description,
  tags = [],
}: DestinationCardProps) => {
  return (
    <Container
      fixed
      sx={{
        padding: "30px",
        margin: "20px auto",
        height: "80vh",
        width: "30vw",
        borderRadius: "15px",
        color: "#fff",
        display: "flex",
        justifyContent: "end",
        flexDirection: "column",
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>{name}</h1>
      <Container
        sx={{
          width: "100%",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          padding: "25px 0px",
        }}
      >
        {tags.map((tag) => (
          <Box
            key={tag}
            sx={{
              fontWeight: "bold",
              padding: "10px",
              backgroundColor: "#ccc",
              borderRadius: "5px",
              color: "#0a0a0a",
            }}
          >
            {tag}
          </Box>
        ))}
        <Box
          sx={{
            backgroundColor: "#040404e8",
            color: "#ffffff",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <Typography variant="body2" sx={{ fontStyle: "italic" }}>
            Plan my trip
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "#ffffffe8",
          color: "#0a0a0a",
          padding: "20px",
        }}
      >
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Container>
  );
};

export default DestinationCard;
