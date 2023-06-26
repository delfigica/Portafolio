import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import { Box } from "@mui/system";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

import background from "../../assets/images/bg-intro-desktop.svg";


export const Banner = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? {
              height: "80vh",
              display: "flex",
              alignItems: "center",
              padding: "2em 5em",
              zIndex: 4
            }
          : {
              display: "flex",
              flexDirection: "column-reverse",
              padding: "1em 0",
            }
      }
    >
      <Box sx={laptop ? { width: "55%" } : {}}>
        <Typography
          color="primary"
          sx={
            laptop
              ? { fontSize: "4em", fontWeight: 600, fontFamily: "Great Vibes" }
              : {
                  fontSize: "2.5em",
                  fontWeight: 600,
                  fontFamily: "Great Vibes",
                  textAlign: "center",
                }
          }
        >
          Desarrolladora Web
        </Typography>
        <Typography
          sx={
            laptop
              ? { textAlign: "center", width: "80%" }
              : { textAlign: "center" }
          }
        >
          Aquí podras encontrar información sobre mi, mis proyectos y mis redes
          de contacto
        </Typography>
      </Box>
      <Box
        sx={
          laptop
            ? {
                width: "900px",
                height: "500px",
                background: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "700px",
                backgroundPositionX: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 6
              }
            : {
                background: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "300px",
                backgroundPositionX: "center",
                width: "300px",
                height: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
        }
      >
        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
          style={laptop ? { height: "700px", width: "700px", zIndex: 3 } : {height: "350px", width: "350px"}}
        ></Player>
      </Box>
    </Box>
  );
};
