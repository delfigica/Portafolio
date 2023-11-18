import React, { useEffect, useState } from "react";

import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Project = ({ project }) => {
  const [image, setImage] = useState(null);

  const getImage = async () => {
    const { default: image } = await import(
      `../assets/images/Proyects/${project.image}`
    );
    setImage(image);
  };

  useEffect(() => {
    getImage();
  }, []);

  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? { margin: "10px", color: "#fff" }
          : { margin: "5px", color: "#fff" }
      }
    >
      <Box
        sx={
          laptop
            ? {
                width: "500px",
                height: "232px",
                background: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "500px",
              }
            : {
                width: "300px",
                height: "132px",
                background: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "300px",
              }
        }
      ></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={
            laptop
              ? {
                  fontSize: "1.3em",
                  textTransform: "uppercase",
                  margin: "10px 0px",
                }
              : {
                  fontSize: "1em",
                  textTransform: "uppercase",
                  margin: "10px 0px",
                }
          }
        >
          {project.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "70px",
          }}
          className="proyect-button"
        >
          <a href={project?.url} target="_blank">
            <IconButton
              sx={{
                color: "#FFFFFF",
                width: "30px",
                height: "30px",
              }}
            >
              <LanguageIcon sx={{ fontSize: "1em" }} />
            </IconButton>
          </a>
          <a href={project?.github} target="_blank">
            <IconButton
              sx={{
                color: "#FFFFFF",
                width: "30px",
                height: "30px",
              }}
            >
              <GitHubIcon sx={{ fontSize: "1em" }} />
            </IconButton>
          </a>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        {project.lenguages.map((lenguage, i) => (
          <Typography key={i} sx={{ marginRight: "10px" }}>
            {lenguage}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
