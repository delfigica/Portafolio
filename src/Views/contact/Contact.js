import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export const Contact = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={
        laptop
          ? {
              height: "89vh",
              background: "rgb(74, 39, 98)",
              padding: "0 5em",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }
          : {
              background: "rgb(74, 39, 98)",
              padding: "1em",
              margin: "auto",
            }
      }
    >
      <Card
        sx={
          laptop
            ? { width: "400px", height: "380px", padding: "3em" }
            : { width: "290px", height: "340px", padding: "1em" }
        }
      >
        <form
          action="https://formsubmit.co/delfinamariacanas@gmail.com"
          method="POST"
        >
          <TextField
            size="small"
            label="Mail"
            fullWidth
            name="email"
            type="email"
          />
          <TextField
            size="small"
            label="Asunto"
            fullWidth
            sx={{ marginTop: "20px" }}
            name="asunto"
          />
          <TextField
            multiline
            fullWidth
            rows={4}
            sx={{ margin: "20px 0" }}
            label="Mensaje"
            name="mensaje"
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ fontWeight: 600 }}
            type="submit"
          >
            Enviar
          </Button>
        </form>
      </Card>
      <Box>
        <a
          href="mailto:delfinamariacanas@gmail.com"
          target="_blank"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <Box
            sx={
              laptop
                ? {
                    display: "flex",
                    margin: "10px",
                    alignItems: "center",
                    fontSize: "2em",
                  }
                : { margin: "10px", display: "flex" }
            }
          >
            <MailOutlineIcon sx={{ margin: "0px 5px", fontSize: "1em" }} />
            <Typography sx={{ fontSize: ".8em" }}>
              delfinamariacanas@gmail.com
            </Typography>
          </Box>
        </a>
        <a
          href="https://www.linkedin.com/in/delfina-ca%C3%B1as-459b6320b"
          target="_blank"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <Box
            sx={
              laptop
                ? {
                    display: "flex",
                    margin: "10px",
                    alignItems: "center",
                    fontSize: "2em",
                  }
                : { margin: "10px", display: "flex" }
            }
          >
            <LinkedInIcon sx={{ margin: "0px 5px", fontSize: "1em" }} />
            <Typography sx={{ fontSize: ".8em" }}>Delfina Cañas</Typography>
          </Box>
        </a>
        <a
          href="https://github.com/delfigica"
          target="_blank"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <Box
            sx={
              laptop
                ? {
                    display: "flex",
                    margin: "10px",
                    alignItems: "center",
                    fontSize: "2em",
                  }
                : { margin: "10px", display: "flex" }
            }
          >
            <GitHubIcon sx={{ margin: "0px 5px", fontSize: "1em" }} />
            <Typography sx={{ fontSize: ".8em" }}>delfigica</Typography>
          </Box>
        </a>
      </Box>
    </Box>
  );
};
