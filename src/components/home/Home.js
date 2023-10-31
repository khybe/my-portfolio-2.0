import React from "react";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";

// Import images for the component
import greetingImageSmall from "../../assets/greeting-768x432.gif";
import greetingImageMedium from "../../assets/greeting-1152x648.gif";
import greetingImageLarge from "../../assets/greeting-1920x1080.gif";
import hireMeGif from "../../assets/hire-me-500x500.gif";

import "./Home.css";

const Home = () => {
  return (
    <section id="hero">
      <div className="heroContent">
        <LightSpeed left>
          <p className="tagline">
            A <span>Front-end Developer.</span>
          </p>
        </LightSpeed>
        <div className="mottoContainer">
          <LightSpeed right>
            <p>
              I believe in brevity and minimalism to create dynamic, sleek, and
              user-friendly web apps.
            </p>
          </LightSpeed>
          <a href="mailto:saadat.khaibar@gmail.com">
            {/* Display a link for hiring with a GIF animation */}
            <img src={hireMeGif} alt="Hire me animation in the form of a GIF" />
          </a>
        </div>
        <div className="helloAnimeContainer">
          <Zoom>
            <picture>
              {/* Use responsive images based on viewport width */}
              <source srcSet={greetingImageSmall} media="(max-width: 768px)" />
              <source
                srcSet={greetingImageMedium}
                media="(max-width: 1152px)"
              />
              <img
                src={greetingImageLarge}
                alt="Hello, I am Khaibar! animation"
              />
            </picture>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Home; // Export the Home component as the default
