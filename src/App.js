import { Banner } from "./Views/Banner";

import { ThemeProvider } from "@mui/material";
import { theme } from "./Style";
import { Proyects } from "./Components/Proyects";
import { Box } from "@mui/system";
import { proyects } from "./Data/ProyectsData";
import { NavBar } from "./Components/NavBar";
import { AboutMe } from "./Views/AboutMe";

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Banner />
        <AboutMe />
        {/* <Box>
          {proyects.map((proyect, index) => (
            <Proyects
              key={proyect.title}
              flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
              proyect={proyect}
            />
          ))}
        </Box> */}
      </ThemeProvider>
    </Box>
  );
}

export default App;
