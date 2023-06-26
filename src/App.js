import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./Components/NavBar";
import { Home } from "./Views/home/Home";

import { ThemeProvider } from "@mui/material";
import { theme } from "./Style";
import { Box } from "@mui/system";
import { Projects } from "./Views/projects/Projects";

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
