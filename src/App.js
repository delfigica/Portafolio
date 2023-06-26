import { Banner } from "./Views/Banner";

import { ThemeProvider } from "@mui/material";
import { theme } from "./Style";

import { Box } from "@mui/system";

import { NavBar } from "./Components/NavBar";
import { AboutMe } from "./Views/AboutMe";
import { LastProjects } from "./Views/LastProjects";
import { Footer } from "./Views/Footer";

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Banner />
        <AboutMe />
        <LastProjects />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
