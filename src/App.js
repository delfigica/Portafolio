import { Banner } from "./Views/Banner";

import { ThemeProvider } from "@mui/material";
import { theme } from "./Style";
import { Proyects } from "./Components/Proyects";
import { Box } from "@mui/system";
import { proyects } from "./Data/ProyectsData";

function App() {
  return (
    <Box
      // sx={{
      //   backgroundColor: "#FF416C",
      //   background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
      // }}
    >
      <ThemeProvider theme={theme}>
        <Banner />
        <Box>
          {proyects.map((proyect, index) => (
            <Proyects
              key={proyect.title}
              flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
              proyect={proyect}
            />
          ))}
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
