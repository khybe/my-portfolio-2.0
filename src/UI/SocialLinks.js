import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing specific icons from react-icons/fa library
import styles from "./SocialLinks.module.css"; // Import styles from the SocialLinks module

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a
        href="https://github.com/khybe" // Link to GitHub profile
        target="_blank" // Open link in a new tab/window
        rel="noreferrer" // Security attribute to prevent security risks
        className={styles.githubLink} // Apply specific styling for GitHub link
      >
        <FaGithub /> {/* Render the GitHub icon */}
      </a>
      <a
        href="https://www.linkedin.com/in/khaibar-saadat-6a3858208/" // Link to LinkedIn profile
        target="_blank" // Open link in a new tab/window
        rel="noreferrer" // Security attribute to prevent security risks
        className={styles.linkedinLink} // Apply specific styling for LinkedIn link
      >
        <FaLinkedin /> {/* Render the LinkedIn icon */}
      </a>
    </div>
  );
};

export default SocialLinks; // Export the SocialLinks component as the default export

