import React from "react";
import Home from "./home";
import Navigation from "../components/navbar";
import Project from "./project";
import Testimonial from "./testomonials";

function Main() {
  return (
    <div>
      <Navigation />
      <Home />
      <Project/>
      <Testimonial/>
    </div>
  );
}

export default Main;
