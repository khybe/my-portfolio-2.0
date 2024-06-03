import React from "react";
import Fade from "react-reveal/Fade";

import MySkills from "./MySkills"; // Importing the MySkills component
import styles from "./AboutDescription.module.css"; // Importing the CSS styles

const AboutDescription = () => {
  const { aboutDescription, aboutTitle } = styles; // Destructuring CSS classes from the imported styles

  return (
    <article className={aboutDescription}>
      {" "}
      {/* Assigning the aboutDescription class */}
      <Fade left>
        {" "}
        {/* Fade animation effect from the left */}
        <h2 className={aboutTitle}>ABOUT ME</h2>{" "}
        {/* Applying the aboutTitle class */}
      </Fade>
      <Fade right>
        {" "}
        {/* Fade animation effect from the right */}
        <p>
          {/* Description of the individual, showcasing their skills and experiences */}
          I am Khaibar Saadat, a self-taught front-end developer with a strong
          passion for technology and a talent for creating dynamic websites.
          <br />
          <br />
          Over the past four years, I've delved deep into a variety of
          programming languages and tools, continuously refining my skills. My
          journey has been an ongoing exploration of learning, with a relentless
          drive to achieve more. In addition to front-end expertise, I am also
          familiar with MERN stack development, making me well-prepared for
          full-stack challenges.
          <br />
          <br />
          Whether you have a project in mind, seek collaboration, or wish to
          explore my portfolio, I invite you to visit my workspace or reach out
          to me directly. Your web development aspirations are just a message
          away from becoming a reality.
        </p>
        <MySkills /> {/* Rendering the MySkills component */}
      </Fade>
    </article>
  );
};

export default AboutDescription; // Exporting the AboutDescription component
