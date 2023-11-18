import React, { useContext, useEffect, useState } from "react";
import { projects, projectsFilter } from "../../Data/ProjectsData";
import { Project } from "../../Components/Project";
import { lenguageContext } from "../../Hooks/lenguageContext";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Footer } from "../home/Footer";

export const Projects = () => {
  const [projectsData, setProjectsData] = useState(projects);
  const [proyectCategory, setProyectCategory] = useState(projectsFilter);
  const { lenguage } = useContext(lenguageContext);
  const [selectedCategorie, setSelectedCategorie] = useState("all");
  const handleChangeSelect = (e) => {
    if (e.target.value === "all") {
      setProjectsData(projects);
    } else {
      let newProjects = projects.filter((project) =>
        project.filter.includes(e.target.value)
      );
      setProjectsData(newProjects);
    }
  };
  return (
    <Box
      sx={{ padding: "2em", color: "#fff", minHeight: "calc(100vh - 50px)" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 5.5em",
        }}
      >
        <Typography sx={{ fontSize: "2em", color: "#fff" }}>
          PROJECTS
        </Typography>
        <FormControl sx={{ color: "#fff" }} size="small">
          <InputLabel>
            {lenguage == "en" ? "Categories" : "Categorias"}
          </InputLabel>
          <Select
            sx={{ minWidth: "200px", color: "#fff" }}
            onChange={handleChangeSelect}
          >
            {proyectCategory.map((category) => (
              <MenuItem value={category.value} key={category.value}>
                {lenguage == "en" ? category.en : category.es}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
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
    </Box>
  );
};
