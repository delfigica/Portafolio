import React from "react";
import { Banner } from "./Banner.js";
import { AboutMe } from "./AboutMe";
import { LastProjects } from "./LastProjects";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <LastProjects />
      <Footer />
    </>
  );
};
