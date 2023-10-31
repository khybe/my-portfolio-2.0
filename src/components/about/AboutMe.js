import React from "react";

import AboutProfile from "./components/AboutProfile"; // Importing the AboutProfile component
import AboutDescription from "./components/AboutDescription"; // Importing the AboutDescription component
import "./AboutMe.css"; // Importing the associated CSS for styling

function AboutMe() {
  return (
    <section id="about">
      {" "}
      {/* Section for the AboutMe content */}
      <div className="about-content">
        {" "}
        {/* Division containing the AboutMe content */}
        <AboutProfile /> {/* Render the AboutProfile component */}
        <AboutDescription /> {/* Render the AboutDescription component */}
      </div>
    </section>
  );
}

export default AboutMe; // Exporting the AboutMe component as the default
