import React, { useEffect, useState } from "react";

import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Project } from "../Components/Project";
import { projects } from "../Data/ProjectsData";

export const LastProjects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    setProjectsData(projects.slice(0, 2));
  }, []);

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
        <a
          href="/proyectos"
          style={{
            textDecoration: "none",
            backgroundColor: "rgb(34,34,34)",
            color: "white",
            padding: ".3em 3em",
            borderRadius: "5px",
            fontSize: "1.1em",
            fontFamily: "Poppins",
            "&:hover": {
              backgroundColor: "rgb(74, 39, 98)",
            },
          }}
        >
          Más proyectos
        </a>
      </Box>
    </Box>
  );
};
