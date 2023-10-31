import React from "react"; // Import React library
import styles from "./Project.module.css"; // Import styles from the Project module

const Project = ({ project, onOpenModal }) => (
  <div className={styles["project-item"]}>
    {" "}
    {/* Display project item using defined styles */}
    <h3>{project.title}</h3> {/* Render the project title */}
    <a href={project.projectLink} target="_blank" rel="noreferrer">
      {" "}
      {/* Link to the project, open in a new tab */}
      <img src={project.image} alt={project.title} />{" "}
      {/* Display the project image */}
    </a>
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

export default Project; // Export the Project component as the default export
