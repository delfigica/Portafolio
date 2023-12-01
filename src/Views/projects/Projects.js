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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { projectEs } from "../../Data/LenguageData";

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
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{ padding: "2em", color: "#fff", minHeight: "calc(100vh - 50px)" }}
    >
      <Box
        sx={
          laptop
            ? {
                display: "flex",
                justifyContent: "space-between",
                padding: "0 5.5em",
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100px",
              }
        }
      >
        <Typography
          sx={{
            fontSize: "2em",
            color: "#fff",
            textTransform: "uppercase",
            marginLeft: "-10px",
          }}
        >
          {lenguage == "en" ? "Projects" : projectEs.title}
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
