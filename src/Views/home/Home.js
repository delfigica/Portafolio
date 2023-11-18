import React from "react";
import { Banner } from "./Banner.js";
import { AboutMe } from "./AboutMe";
import { LastProjects } from "./LastProjects";
import { Footer } from "./Footer";
import { Skills } from "./Skills.js";

export const Home = () => {
  return (
    <>
      <Banner />
      <Skills />
      {/* <AboutMe /> */}
      <LastProjects />
      <Footer />
    </>
  );
};
