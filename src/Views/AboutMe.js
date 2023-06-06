import React from "react";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export const AboutMe = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box sx={laptop ? { padding: "1em 5em" } : { padding: "1em" }}>
      <Typography color="primary" sx={{ fontSize: "2em" }}>
        Sobre Mi
      </Typography>
      <Typography sx={{ margin: "10px 0px" }}>
        ¡Hola! Mi nombre es María Delfina Cañas, tengo 23 años y vivo en la
        Ciudad de Córdoba. Mi viaje en el mundo tecnológico comenzó en 2020
        durante la cuarentena, cuando el aburrimiento y mi sed de conocimiento
        se unieron. Empecé sumergiéndome en la documentación de HTML y CSS en
        w3school. Luego, continué mi aprendizaje a través de cursos en YouTube y
        finalmente obtuve el certificado de Responsive Web Design en
        FreeCodeCamp. Además, me desafié a mí misma resolviendo problemas en
        CodeWars, lo que me ayudó a mejorar enormemente mi habilidad lógica.
      </Typography>
      <Typography sx={{ margin: "10px 0px" }}>
        Mi primer encuentro con un framework de JavaScript fue Angular. Completé
        varios cursos en Udemy y complementé mi aprendizaje con videos en
        YouTube. Luego, desarrollé proyectos propios para poner en práctica mis
        conocimientos. Posteriormente, participé en la capacitación de Argentina
        Programa, la cual me permitió reforzar mis conocimientos.
      </Typography>
      <Typography sx={{ margin: "10px 0px" }}>
        Durante mi formación, descubrí React, que se ha convertido en mi
        framework favorito actualmente. Para aprenderlo, leí numerosa
        documentación, realicé cursos en Udemy y vi videos en YouTube. En la
        actualidad, la mayoría de mis proyectos los desarrollo utilizando este
        framework.
      </Typography>
      <Typography sx={{ margin: "10px 0px" }}>
        En cuanto a los frameworks de diseño, suelo utilizar Material UI, pero
        también tengo experiencia en el uso de Bootstrap.
      </Typography>
      <Typography sx={{ margin: "10px 0px" }}>
        En lo que respecta al backend, poseo conocimientos en Strapi, donde
        puedo realizar autenticación con JWT, personalizar los handlers y crear
        una API REST. Además, tengo conocimientos básicos de Node.js y Java con
        Spring Boot.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '15px'}}>
        <a
          href="https://delfigica.github.io/CV/"
          style={{
            textDecoration: "none",
            backgroundColor: "rgb(34,34,34)",
            color: "white",
            padding: ".3em 3em",
            borderRadius: "5px",
            fontSize: "1.1em",
            fontFamily: "Poppins",
            "&:hover": {
              backgroundColor: "rgb(74, 39, 98)",
            },
          }}
          target="_blank"
        >
          Visita mi CV
        </a>
      </Box>
    </Box>
  );
};
