import React from "react";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export const NavBar = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? {
              padding: ".5em 2em",
              boxShadow: "0px 9px 17px -14px rgba(0,0,0,0.75)",
              position: "sticky",
              top: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: '#fff'
            }
          : {
              padding: ".5em 1em",
              boxShadow: "0px 9px 17px -14px rgba(0,0,0,0.75)",
              position: "sticky",
              top: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: '#fff'

            }
      }
    >
      <Typography
        color="primary"
        sx={
          laptop
            ? {
                fontSize: "2em",
                fontWeight: 600,
                fontFamily: "Great Vibes",
                cursor: "pointer",
              }
            : {
                fontSize: "1.5em",
                fontWeight: 600,
                fontFamily: "Great Vibes",
                textAlign: "center",
              }
        }
      >
        Delfina
      </Typography>
      <Box
        sx={
          laptop
            ? {
                display: "flex",
                justifyContent: "space-between",
                width: "250px",
              }
            : {
                display: "flex",
                justifyContent: "space-between",
                width: "210px",
              }
        }
      >
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": { color: "rgb(74, 39, 98)", fontWeight: 600 },
          }}
        >
          Proyectos
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": { color: "rgb(74, 39, 98)", fontWeight: 600 },
          }}
        >
          Contacto
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": { color: "rgb(74, 39, 98)", fontWeight: 600 },
          }}
        >
          Blog
        </Typography>
      </Box>
    </Box>
  );
};
