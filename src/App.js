import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Views/home/Home";
import { NavBar } from "./Components/NavBar";
import { Contact } from "./Views/contact/Contact";
import { Projects } from "./Views/projects/Projects";

import { ThemeProvider } from "@mui/material";
import { theme } from "./Style";
import { Box } from "@mui/system";
import { lenguageContext } from "./Hooks/lenguageContext";
import { useState } from "react";
import { Footer } from "./Views/home/Footer";
function App() {
  const [lenguage, setLenguage] = useState("en");
  return (
    <Box sx={{ backgroundColor: "#1b1b1b" }}>
      <lenguageContext.Provider value={{ lenguage, setLenguage }}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/Portafolio">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proyectos" element={<Projects />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </lenguageContext.Provider>
    </Box>
  );
}

export default App;
