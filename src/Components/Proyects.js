import React from "react";

import { Box, Button, Tooltip, Typography } from "@mui/material";

export const Proyects = ({ flexDirection = "row", proyect }) => {
  console.log("proyect: ", proyect);

  proyect?.tecnologies.map((tecnologie) => {
    console.log(tecnologie);
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: { flexDirection },
        height: "100vh",
        justifyContent: "space-evenly",
        padding: "5em",
      }}
    >
      <Box sx={{ width: "50%", borderRadius: '5px', objectFit: 'cover' }}>
        <img
          style={{
            height: "350px",
          }}
          src={`https://raw.githubusercontent.com/delfigica/Portafolio/main/public/assets/${proyect.image}`}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
          background: "black",
          padding: "2em",
          borderRadius: "5px",
          height: "350px",
        }}
      >
        <Typography color="primary" variant="h2" sx={{ fontSize: "2em" }}>
          {proyect?.title}
        </Typography>
        <Typography color="primary" variant="body1" sx={{ fontSize: "1.3em" }}>
          {proyect?.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "90%",
            margin: "10px",
          }}
        >
          {proyect?.tecnologies.map((tecnologie) => (
            <Tooltip title={tecnologie}>
              <Box key={tecnologie} sx={{ width: "50px" }}>
                <img
                  src={`https://raw.githubusercontent.com/delfigica/Portafolio/main/public/assets/IconsTecnologies/${tecnologie}.png`}
                />
              </Box>
            </Tooltip>
          ))}
        </Box>
        <a
          href={proyect?.url}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button variant="outlined" sx={{ fontWeight: "600" }}>
            Ver proyecto
          </Button>
        </a>
      </Box>
    </Box>
  );
};
