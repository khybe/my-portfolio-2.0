import React from "react"; // Import React library
import styles from "./Project.module.css"; // Import styles from the Project module

const Project = ({ project, onOpenModal }) => {
  const renderImage = project.projectLink ? ( // Check if project.projectLink exists
    <a href={project.projectLink} target="_blank" rel="noreferrer">
      <img src={project.image} alt={project.title} />
    </a>
  ) : (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noreferrer"
      className={styles["image-container"]}
    >
      <img src={project.image} alt={project.title} />
      <p className={styles["warning-message"]}>
        This project is only available as source code on GitHub.
      </p>
    </a>
  );

  return (
    <div className={styles["project-item"]}>
      {/* Display project item using defined styles */}
      <h3>{project.title}</h3> {/* Render the project title */}
      {renderImage} {/* Render the image based on the condition */}
      <button
        className={
          styles["details-button"]
        } /* Apply styles to the details button */
        onClick={() =>
          onOpenModal(project)
        } /* Trigger the function to open the modal on button click */
      >
        Project Details {/* Button text for project details */}
      </button>
    </div>
  );
};

export default Project; // Export the Project component as the default export
