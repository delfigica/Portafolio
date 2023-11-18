import React from "react";
import { Banner } from "./Banner.js";
import { LastProjects } from "./LastProjects";
import { Skills } from "./Skills.js";

export const Home = () => {
  return (
    <>
      <Banner />
      <Skills />
      <LastProjects />
    </>
  );
};
