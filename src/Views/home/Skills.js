import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export const Skills = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={
        laptop
          ? {
              height: "40vh",
              color: "#fff",
              padding: "5em",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              textAlign: "center",
            }
          : {
              color: "#fff",
              padding: "1em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
              height: "45vh",
            }
      }
    >
      <Typography variant="h5" sx={laptop ? { width: "25%" } : {}}>
        HTML
      </Typography>
      <Typography variant="h5" sx={laptop ? { width: "25%" } : {}}>
        CSS
      </Typography>
      <Typography variant="h5" sx={laptop ? { width: "25%" } : {}}>
        JAVASCRIPT
      </Typography>
      <Typography variant="h5" sx={laptop ? { width: "25%" } : {}}>
        TYPESCRIPT
      </Typography>
      <Typography variant="h5" sx={laptop ? { width: "25%" } : {}}>
        REACT & NEXT
      </Typography>
      <Typography variant="h5" sx={laptop ? { width: "25%" } : {}}>
        VUE & NUXT
      </Typography>
      <Typography variant="h5" sx={laptop ? { width: "25%" } : {}}>
        MATERIAL UI
      </Typography>
      <Typography variant="h5" sx={laptop ? { width: "25%" } : {}}>
        VUETIFY
      </Typography>
    </Box>
  );
};
