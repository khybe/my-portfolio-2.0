import React from "react";

import AboutProfile from "./components/AboutProfile";
import AboutDescription from "./components/AboutDescription";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about">
      <div className="about-content">
        <AboutProfile />
        <AboutDescription />
      </div>
    </section>
  );
}

export default AboutMe;
