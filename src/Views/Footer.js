import React from "react";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? {
              background: "rgb(34,34,34)",
              borderRadius: "80px 0px 0px 0px",
              height: "120px",
              padding: "2em 4em",
              display: "flex",
              alignItems: "center",
            }
          : {
              background: "rgb(34,34,34)",
              borderRadius: "80px 0px 0px 0px",
              padding: "2em 0",
              height: "40vh",
            }
      }
    >
      <Typography
        sx={
          laptop
            ? {
                fontSize: "2em",
                fontFamily: "Great Vibes",
                cursor: "pointer",
                color: "#fff",
              }
            : {
                fontSize: "1.8em",
                fontFamily: "Great Vibes",
                textAlign: "center",
                color: "#fff",
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
                color: "#fff",
                justifyContent: "center",
                margin: "auto",
              }
            : {
                color: "#fff",
              }
        }
      >
        <a
          href="mailto:delfinamariacanas@gmail.com"
          target="_blank"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <Box
            sx={
              laptop
                ? { display: "flex", margin: "0 10px" }
                : { margin: "10px", display: "flex" }
            }
          >
            <MailOutlineIcon sx={{ margin: "0px 5px" }} />{" "}
            <Typography>delfinamariacanas@gmail.com</Typography>
          </Box>
        </a>
        <a
          href="https://www.linkedin.com/in/delfina-ca%C3%B1as-459b6320b"
          target="_blank"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <Box
            sx={
              laptop
                ? { display: "flex", margin: "0 10px" }
                : { margin: "10px", display: "flex" }
            }
          >
            <LinkedInIcon sx={{ margin: "0px 5px" }} />
            <Typography>Delfina Cañas</Typography>
          </Box>
        </a>
        <a
          href="https://github.com/delfigica"
          target="_blank"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <Box
            sx={
              laptop
                ? { display: "flex", margin: "0 10px" }
                : { margin: "10px", display: "flex" }
            }
          >
            <GitHubIcon sx={{ margin: "0px 5px" }} />
            <Typography>delfigica</Typography>
          </Box>
        </a>
      </Box>
    </Box>
  );
};
