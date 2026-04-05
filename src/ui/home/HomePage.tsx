import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DestinationCard from "../components/DestinationCard";

const destinations = [
  {
    name: "Paracas",
    imageUrl: "/paracas.png",
    description: "Reserva natural con playas y fauna única del Perú.",
    tags: ["Beach", "Nature"],
  },
  {
    name: "Cusco",
    imageUrl: "/paracas.png",
    description: "Ciudad imperial de los Incas llena de historia.",
    tags: ["History", "Culture"],
  },
  {
    name: "Máncora",
    imageUrl: "/paracas.png",
    description: "Playa de aguas cálidas en el norte del Perú.",
    tags: ["Beach", "Surf"],
  },
];

const HomePage = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={2}
        style={{ padding: "20px", width: "70vw", margin: "0 auto" }}
      >
        {destinations.map((dest) => (
          <SwiperSlide key={dest.name}>
            <DestinationCard
              name={dest.name}
              imageUrl={dest.imageUrl}
              description={dest.description}
              tags={dest.tags}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        variant="contained"
        color="primary"
        sx={{
          margin: "20px auto",
          display: "block",
          width: "500px",
          height: "50px",
          fontSize: "18px",
        }}
      >
        Find my trip
      </Button>
    </>
  );
};

export default HomePage;
