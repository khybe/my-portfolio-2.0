import profileImage from "../../assets/profileImage.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./AboutProfile.module.css";

const AboutProfile = () => {
  const {
    aboutProfile,
    aboutProfileImage,
    name,
    profession,
    buttons,
    resumeButton,
    emailButton,
    socialIcons,
    githubLink,
    linkedinLink,
  } = styles;

  return (
    <div className={aboutProfile}>
      <img
        className={aboutProfileImage}
        src={profileImage}
        alt="Khaibar Saadat Profile"
      />
      <h2 className={name}>Khaibar Saadat</h2>
      <h3 className={profession}>Front-End Developer</h3>
      <div className={buttons}>
        <a
          href="https://drive.google.com/file/d/1vVOhrLF7ZmOfJQXGgbakIfpsflboVmpf/view?usp=sharing"
          className={resumeButton}
          target="__blank"
        >
          Resume
        </a>
        <a href="mailto:saadat.khaibar@gmail.com" className={emailButton}>
          Email
        </a>
      </div>
      <div className={socialIcons}>
        <a
          href="https://github.com/khybe"
          target="_blank"
          rel="noreferrer"
          className={githubLink}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/khaibar-saadat-6a3858208/"
          target="_blank"
          rel="noreferrer"
          className={linkedinLink}
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default AboutProfile;
