import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography clor="#FF2625" fontSize="26px" fontWeight="600">
        Fitness club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
        mb="23px"
        mt="30px"

      >
        Sweat, smile <br /> and repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective excercises
      </Typography>
      <Button variant="contained" color="error" href="#excercises" sx={{
        backgroundColor: '#ff2625',
        padding: '10px'
      }}>
        Explore excercises
      </Button>
      <Typography
        fontWeight="600"
        color="#FF2625"
        sx={{
          display: {
            lg: "block",
            xs: "none",
          },
          opacity: "0.1",
        }}
        fontSize='200px'
      >Excercises</Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" width={400} height={300} />
    </Box>
  );
};

export default HeroBanner;
