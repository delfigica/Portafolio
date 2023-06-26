import React, { useEffect, useState } from "react";

import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Project = ({ project }) => {
  const [image, setImage] = useState(null);

  const getImage = async () => {
    const { default: image } = await import(
      `../assets/images/${project.image}`
    );
    setImage(image);
  };

  useEffect(() => {
    getImage();
  }, []);

  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  console.log('project: ', project)

  return (
    <>
      <Box
        sx={
          laptop
            ? {
                width: "500px",
                height: "232px",
                background: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "500px",
                backgroundPositionX: "center",
                borderRadius: "10px",
                cursor: "pointer",
              }
            : {
                width: "290px",
                height: "150px",
                background: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "340px",
                backgroundPositionX: "center",
                borderRadius: "10px",
                margin: "10px 0px",
              }
        }
        className="proyect-container"
      >
        {laptop && (
          <Box
            sx={
              laptop
                ? {
                    width: "500px",
                    height: "232px",
                    backgroundColor: "#000000",
                    borderRadius: "10px",
                    opacity: 0,
                  }
                : {
                    width: "290px",
                    height: "150px",
                  }
            }
            className="proyect-filter"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
              className="proyect-button"
            >
              <a href={project?.url} target="_blank">
                <IconButton
                  sx={{
                    color: "#FFFFFF",
                    width: "50px",
                    height: "50px",
                    margin: "0px 20px",
                  }}
                >
                  <LanguageIcon sx={{ fontSize: "1.5em" }} />
                </IconButton>
              </a>
              <a href={project?.github} target="_blank">
                <IconButton
                  sx={{
                    color: "#FFFFFF",
                    width: "50px",
                    height: "50px",
                    margin: "0px 20px",
                  }}
                >
                  <GitHubIcon sx={{ fontSize: "1.5em" }} />
                </IconButton>
              </a>
            </Box>
          </Box>
        )}
      </Box>{" "}
      {!laptop && (
        <Box>
          <a href={project?.url} target="_blank">
            <IconButton
              sx={{
                color: "#101010",
                width: "35px",
                height: "35px",
                margin: "0px 20px",
              }}
            >
              <LanguageIcon sx={{ fontSize: "1.5em" }} />
            </IconButton>
          </a>
          <a href={project?.github} target="_blank">
            <IconButton
              sx={{
                color: "#101010",
                width: "35px",
                height: "35px",
                margin: "0px 20px",
              }}
            >
              <GitHubIcon sx={{ fontSize: "1.5em" }} />
            </IconButton>
          </a>
        </Box>
      )}
    </>
  );
};
