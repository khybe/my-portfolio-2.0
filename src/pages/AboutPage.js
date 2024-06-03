import React from "react";

import AboutProfile from "../components/about/AboutProfile"; // Importing the AboutProfile component
import AboutDescription from "../components/about/AboutDescription"; // Importing the AboutDescription component
import "./CSS/AboutPage.css"; // Importing the associated CSS for styling

function AboutPage() {
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

export default AboutPage; // Exporting the AboutMe component as the default
