import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Views/home/Home";
import { NavBar } from "./Components/NavBar";
import { Contact } from "./Views/contact/Contact";
import { Projects } from "./Views/projects/Projects";

import { ThemeProvider } from "@mui/material";
import { theme } from "./Style";
import { Box } from "@mui/system";

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/Portafolio">
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
