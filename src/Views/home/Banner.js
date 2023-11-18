import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { bannerEs, btnEs } from "../../Data/LenguageData";
import { lenguageContext } from "../../Hooks/lenguageContext";

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import me from "../../assets/images/me.png";
export const Banner = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  const nav = useNavigate();

  const goTo = () => {
    nav("/contacto");
  };

  const { lenguage } = useContext(lenguageContext);

  return (
    <Box
      z
      sx={
        laptop
          ? {
              height: "100vh",
              color: "#ffffff",
              padding: "2em",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }
          : {
              display: "flex",
              flexDirection: "column-reverse",
              color: "#ffffff",
              height: "92vh",
              justifyContent: "space-around",
            }
      }
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={laptop ? { fontSize: "3em" } : { fontSize: "1.5em" }}>
          {lenguage == "en" ? "Hey! Welcome to my portfolio" : bannerEs.title}
        </Typography>
        <Typography
          sx={
            laptop
              ? {
                  fontSize: "3em",
                  textAlign: "center",
                  textDecoration: "3px underline #7f00ff",
                }
              : {
                  fontSize: "1.5em",
                  textAlign: "center",
                  textDecoration: "3px underline #7f00ff",
                }
          }
        >
          {lenguage == "en" ? "I'm Delfina Cañas." : bannerEs.subtitle}
        </Typography>
        <Typography
          sx={
            laptop
              ? { width: "60%", margin: "10px auto" }
              : { width: "90%", margin: "10px auto" }
          }
        >
          {lenguage == "en"
            ? `Based in Argentina. I'm front-end developer passionate about building
          accesible web apps that users love.`
            : bannerEs.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
          <Button variant="contained" onClick={goTo}>
            {lenguage == 'en' ? "contact me" : btnEs.contact}
          </Button>
          <Button variant="outlined" color="white">
            curriculum
          </Button>
        </Box>
      </Box>
      <Box
        sx={
          laptop
            ? {
                backgroundImage: `url(${me})`,
                width: "400px",
                height: "400px",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
                backgroundPositionY: "90%",
                backgroundSize: "400px",
                borderRadius: "50%",
              }
            : {
                backgroundImage: `url(${me})`,
                width: "300px",
                height: "300px",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
                backgroundPositionY: "90%",
                backgroundSize: "300px",
                borderRadius: "50%",
                margin: "0px auto",
              }
        }
      ></Box>
    </Box>
  );
};
