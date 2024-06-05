import React from "react";
import Fade from "react-reveal/Fade";

import MySkills from "./MySkills"; // Importing the MySkills component
import styles from "./AboutDescription.module.css"; // Importing the CSS styles

const AboutDescription = () => {
  const { aboutDescription, aboutTitle } = styles; // Destructuring CSS classes from the imported styles

  return (
    <article className={aboutDescription}>
      {/* Assigning the aboutDescription class */}
      <Fade left>
        {/* Fade animation effect from the left */}
        <h2 className={aboutTitle}>ABOUT ME</h2>
        {/* Applying the aboutTitle class */}
      </Fade>
      <Fade right>
        {/* Fade animation effect from the right */}
        <p>
          {/* Description of the individual, showcasing their skills and experiences */}
          Hello, I'm Khaibar Saadat, a self-taught full-stack developer with a
          passion for crafting dynamic applications. As a student since 2019 and
          an independent freelancer since November 2023, I've honed my skills.
          Among most, I specialize in frontend and backend development,
          particularly in the MERN stack, excelling in crafting responsive
          websites, robust APIs, and integrated authentication and automatic
          email systems. My focus extends to ensuring seamless user experiences
          and efficient CRUD operations.
          <br />
          <br />
          Whether you have a specific project in mind or are seeking
          collaboration, I invite you to explore my portfolio and reach out to
          me. Your web development aspirations are just a message away from
          becoming a reality.
        </p>
        <MySkills /> {/* Rendering the MySkills component */}
      </Fade>
    </article>
  );
};

export default AboutDescription;
