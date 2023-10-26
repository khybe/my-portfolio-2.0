import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a
        href="https://github.com/khybe"
        target="_blank"
        rel="noreferrer"
        className={styles.githubLink}
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/khaibar-saadat-6a3858208/"
        target="_blank"
        rel="noreferrer"
        className={styles.linkedinLink}
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
