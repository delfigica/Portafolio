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
              height: "calc(100vh - 64px)",
              background: "#b695c0",
              padding: "0 5em",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }
          : {
              background: "#b695c0",
              padding: "2em 1em",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }
      }
    >
      <Card
        sx={
          laptop
            ? {
                width: "800px",
                height: "450px",
                backgroundColor: "#3e3e3e",
                borderRadius: "10px",
              }
            : { width: "90%", height: "480px", backgroundColor: "#3e3e3e" }
        }
      >
        <Box
          sx={{
            backgroundColor: "#4d4d4f",
            width: "100%",
            height: "30px",
            padding: "0 1em",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "#ed1c6f",
                borderRadius: "8px",
              }}
            ></Box>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "#e8e925",
                borderRadius: "8px",
                margin: "0 7px",
              }}
            ></Box>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "#74c54f",
                borderRadius: "8px",
              }}
            ></Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                backgroundColor: "#999",
                width: "3px",
                height: "3px",
                borderRadius: "8px",
              }}
            ></Box>
            <Box
              sx={{
                backgroundColor: "#999",
                width: "3px",
                height: "3px",
                borderRadius: "8px",
                margin: "0 3px",
              }}
            ></Box>
            <Box
              sx={{
                backgroundColor: "#999",
                width: "3px",
                height: "3px",
                borderRadius: "8px",
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          sx={
            laptop
              ? { display: "flex", height: "calc(100% - 30px)" }
              : { display: "flex", flexDirection: "column" }
          }
        >
          <Box
            sx={
              laptop
                ? {
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "2em",
                  }
                : {
                    padding: "1em",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }
            }
          >
            <Box>
              <Typography
                sx={{
                  color: "#c263f6",
                  fontSize: "1.5em",
                  textTransform: "uppercase",
                  fontWeight: 800,
                }}
              >
                Contactame
              </Typography>
              <Box
                sx={{
                  width: "50px",
                  height: "10px",
                  backgroundColor: "#c263f6",
                }}
              ></Box>
            </Box>
            <Box>
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

                          alignItems: "center",
                          fontSize: "1.2em",
                        }
                      : { margin: "10px", display: "flex" }
                  }
                >
                  <LinkedInIcon sx={{ margin: "0px 5px", fontSize: "1em" }} />
                  <Typography sx={{ fontSize: ".8em" }}>
                    Delfina Cañas
                  </Typography>
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

                          alignItems: "center",
                          fontSize: "1.2em",
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
          <Box sx={laptop ? { padding: "2em" } : { padding: "1em" }}>
            <form
              action="https://formsubmit.co/delfinamariacanas@gmail.com"
              method="POST"
              style={{ color: "#FFF" }}
            >
              <TextField
                size="small"
                label="Mail"
                fullWidth
                name="email"
                type="email"
                variant="standard"
                color="white"
                sx={{ color: "#FFF", fontSize: "1.2em" }}
              />
              <TextField
                size="small"
                label="Asunto"
                fullWidth
                sx={{ marginTop: "20px", color: "#FFF" }}
                name="asunto"
                variant="standard"
                color="white"
              />
              <TextField
                multiline
                fullWidth
                rows={4}
                sx={{ margin: "20px 0", color: "#FFF" }}
                label="Mensaje"
                name="mensaje"
                variant="standard"
                color="white"
              />
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                  sx={{ fontWeight: 600, color: "#c263f6", fontSize: "1.2em" }}
                  type="submit"
                >
                  Enviar
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
