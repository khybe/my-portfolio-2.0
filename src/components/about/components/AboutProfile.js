import React from "react";
import Fade from "react-reveal/Fade"; // Importing the Fade component from 'react-reveal'

import profileImage from "../../../assets/profileImage.png"; // Importing the profile image
import Button from "../../../UI/Button"; // Importing the Button component
import SocialLinks from "../../../UI/SocialLinks"; // Importing the SocialLinks component
import styles from "./AboutProfile.module.css"; // Importing styles from the CSS module

const AboutProfile = () => {
  const { aboutProfile, aboutProfileImage, name, profession, buttons } = styles; // Destructuring CSS classes from imported styles

  return (
    <div className={aboutProfile}>
      {" "}
      {/* Wrapper div with a class name for the whole about profile section */}
      <Fade left>
        {" "}
        {/* Animation effect to fade in from the left */}
        <img
          className={aboutProfileImage} // Applying a specific class to the profile image
          src={profileImage} // Setting the source for the profile image
          alt="Khaibar Saadat Profile" // Alt text for the profile image
        />
        <h2 className={name}>Khaibar Saadat</h2>{" "}
        {/* Name displayed with a specific class */}
        <h3 className={profession}>Front-End Developer</h3>{" "}
        {/* Profession displayed with a specific class */}
        <div className={buttons}>
          {" "}
          {/* Div containing buttons with a specific class */}
          <Button href="https://drive.google.com/file/d/1vVOhrLF7ZmOfJQXGgbakIfpsflboVmpf/view?usp=sharing">
            Resume {/* Button to view resume */}
          </Button>
          <Button href="mailto:saadat.khaibar@gmail.com">Email</Button>{" "}
          {/* Button to email */}
        </div>
        <SocialLinks />{" "}
        {/* SocialLinks component for displaying social media icons */}
      </Fade>
    </div>
  );
};

export default AboutProfile;
