import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { lenguageContext } from "../Hooks/lenguageContext";

import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GTranslateIcon from "@mui/icons-material/GTranslate";

export const NavBar = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  const nav = useNavigate();

  const goTo = (route) => {
    nav(route);
  };

  const { setLenguage, lenguage } = useContext(lenguageContext);

  const changeLenguage = () => {
    if (lenguage == "es") {
      setLenguage("en");
    } else {
      setLenguage("es");
    }
  };

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
              backgroundColor: "	rgba(27,27,27,0.95)",
              zIndex: 40,
            }
          : {
              padding: ".5em 1em",
              boxShadow: "0px 9px 17px -14px rgba(0,0,0,0.75)",
              position: "sticky",
              top: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#1b1b1b",
              zIndex: 40,
            }
      }
    >
      <Typography
        onClick={() => goTo("/")}
        sx={
          laptop
            ? {
                fontSize: "1.5em",
                fontWeight: 600,
                cursor: "pointer",
                color: "#fff",
              }
            : {
                fontSize: "1.5em",
                fontWeight: 600,
                textAlign: "center",
                color: "#fff",
              }
        }
      >
        delfinacañas
      </Typography>
      <Box
        sx={
          laptop
            ? {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100px",
              }
            : {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "110px",
              }
        }
      >
        <Typography sx={{ textTransform: "capitalize", color: '#fff' }}>{lenguage}</Typography>
        <IconButton
          sx={{ color: "#fff" }}
          size="small"
          onClick={changeLenguage}
        >
          <GTranslateIcon sx={{ margin: "0px 5px", fontSize: "1.2em" }} />
        </IconButton>
        <a
          href="https://www.linkedin.com/in/delfina-ca%C3%B1as-459b6320b"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <LinkedInIcon sx={{ margin: "0px 5px" }} />
        </a>
        <a
          href="https://github.com/delfigica"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <GitHubIcon sx={{ margin: "0px 5px" }} />
        </a>
      </Box>
    </Box>
  );
};
