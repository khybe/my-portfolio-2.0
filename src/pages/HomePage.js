import React from "react";
import Zoom from "react-reveal/Zoom"; // Importing the Zoom effect from the "react-reveal" library
import LightSpeed from "react-reveal/LightSpeed"; // Importing the LightSpeed effect from the "react-reveal" library

// Import images for different viewport sizes to use in the component
import greetingImageSmall from "../assets/greeting-768x432.gif"; // Small-sized image for viewport width up to 768px
import greetingImageMedium from "../assets/greeting-1152x648.gif"; // Medium-sized image for viewport width up to 1152px
import greetingImageLarge from "../assets/greeting-1920x1080.gif"; // Large-sized image for larger viewport width
import hireMeGif from "../assets/hire-me-500x500.gif"; // Import a GIF for the hiring link

import "./CSS/HomePage.css"; // Importing the associated CSS file for the Home component styling

const HomePage = () => {
  return (
    <section id="hero">
      {/* Hero section for the homepage */}
      <div className="heroContent">
        {/* Div for the hero content */}
        <LightSpeed left>
          <p className="tagline">
            A <span>Front-end Developer.</span>{" "}
            {/* Tagline indicating the role */}
          </p>
        </LightSpeed>
        <div className="mottoContainer">
          {/* Container for the developer's motto */}
          <LightSpeed right>
            <p>
              I believe in brevity and minimalism to create dynamic, sleek, and
              user-friendly web apps. {/* Developer's design philosophy */}
            </p>
          </LightSpeed>
          <a href="mailto:saadat.khaibar@gmail.com">
            {/* Link for contacting via email */}
            <img src={hireMeGif} alt="Hire me animation in the form of a GIF" />
            {/* GIF for the hiring link */}
          </a>
        </div>
        <div className="helloAnimeContainer">
          {/* Container for the animated greeting */}
          <Zoom>
            <picture>
              {/* Display responsive images based on the viewport width */}
              <source srcSet={greetingImageSmall} media="(max-width: 768px)" />
              {/* Responsive image for smaller screens */}
              <source
                srcSet={greetingImageMedium}
                media="(max-width: 1152px)"
              />
              {/* Responsive image for medium screens */}
              <img
                src={greetingImageLarge}
                alt="Hello, I am Khaibar! animation"
              />
              {/* Larger image for bigger screens */}
            </picture>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default HomePage; // Export the Home component as the default
