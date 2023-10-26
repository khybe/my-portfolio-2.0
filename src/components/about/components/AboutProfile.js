import profileImage from "../../../assets/profileImage.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../../../UI/Button";
import SocialLinks from "../../../UI/SocialLinks";
import styles from "./AboutProfile.module.css";

const AboutProfile = () => {
  const { aboutProfile, aboutProfileImage, name, profession, buttons } = styles;

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
        <Button href="https://drive.google.com/file/d/1vVOhrLF7ZmOfJQXGgbakIfpsflboVmpf/view?usp=sharing">
          Resume
        </Button>
        <Button href="mailto:saadat.khaibar@gmail.com">Email</Button>
      </div>
      <SocialLinks />
    </div>
  );
};

export default AboutProfile;
