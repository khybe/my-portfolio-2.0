import React from "react";

import AboutProfile from "./AboutProfile";
import AboutDescription from "./AboutDescription";
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
