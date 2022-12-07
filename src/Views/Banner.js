import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Banner = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: "#F0EFEA",
          minHeight: "55vh",
          width: "80%",
          display: "flex",
          padding: "2em",
          borderRadius: '10px 0px 0px 5px'
        }}
      >
        <hr
          style={{
            border: "none",
            borderLeft: "2px dotted #26261F",
            height: "50vh",
            width: "1px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "10px 40px",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ fontSize: "2.2em" }}>
              María Delfina Cañas
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "1.2em" }}>
              Full Stack Junior
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "1.4em", marginLeft: "5px", marginBottom: '-10px' }}
            >
              Desarrolladora web
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" sx={{ fontSize: "5em" }}>
                Portafolio
              </Typography>
              <hr
                style={{
                  border: "none",
                  borderTop: "2px dotted #26261F",
                  height: "1px",
                  width: "48vw",
                  margin: '20px 0px 0px 10px'
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
