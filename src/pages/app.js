import React from "react";
import Home from "./home";
import Navigation from "../components/navbar";
import Project from "./project";

function Main() {
  return (
    <div>
      <Navigation />
      <Home />
      <Project/>
    </div>
  );
}

export default Main;
