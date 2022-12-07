import { Banner } from "./Views/Banner";

import { ThemeProvider } from "@mui/material";
import { theme } from "./Style";
import { Proyects } from "./Components/Proyects";
import { Box } from "@mui/system";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#414345",
        background: "linear-gradient(to right, #414345, #232526)",
      }}
    >
      <ThemeProvider theme={theme}>
        <Banner />
        <Proyects />
      </ThemeProvider>
    </Box>
  );
}

export default App;
