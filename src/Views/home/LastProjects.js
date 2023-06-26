import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Project } from "../../Components/Project";
import { projects } from "../../Data/ProjectsData";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
export const LastProjects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    setProjectsData(projects.slice(0, 2));
  }, []);

  const nav = useNavigate();

  const goToProjects = () => {
    nav("/proyectos");
  };

  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box sx={laptop ? { padding: "1em 5em" } : { padding: "1em" }}>
      <Typography color="primary" sx={{ fontSize: "2em" }}>
        Últimos proyectos
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "20px",
          flexWrap: "wrap",
        }}
      >
        {projectsData?.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "15px" }}>
        <Box
          sx={{
            textDecoration: "none",
            backgroundColor: "rgb(34,34,34)",
            color: "white",
            padding: ".3em 3em",
            borderRadius: "5px",
            fontSize: "1.1em",
            fontFamily: "Poppins",
            cursor: "pointer",
            color: "#fff",
            transition: '1s',
            "&:hover": {
              backgroundColor: "rgb(74, 39, 98)",
            },
          }}
          onClick={goToProjects}
        >
          Más proyectos
        </Box>
      </Box>
    </Box>
  );
};
