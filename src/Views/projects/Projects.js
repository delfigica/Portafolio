import React, { useEffect, useState } from "react";
import { projects } from "../../Data/ProjectsData";
import { Project } from "../../Components/Project";
import { Box } from "@mui/material";
import { Footer } from "../home/Footer";

export const Projects = () => {
  const [projectsData, setProjectsData] = useState(projects);

  return (
    <>
      <Box
        sx={{
          padding: "2em",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {projectsData.map((project) => (
          <Box key={project.id} sx={{ margin: "20px 0px" }}>
            <Project project={project} />
          </Box>
        ))}
      </Box>
      <Footer />
    </>
  );
};
