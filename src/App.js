import { Banner } from "./Views/Banner";

import { ThemeProvider } from "@mui/material";
import { theme } from "./Style";
import { Proyects } from "./Components/Proyects";
import { Box } from "@mui/system";
import { proyects } from "./Data/ProyectsData";
import { NavBar } from "./Components/NavBar";
import { AboutMe } from "./Views/AboutMe";
import { LastProyects } from "./Views/LastProyects";
import { Footer } from "./Views/Footer";

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Banner />
        <AboutMe />
        <LastProyects />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
