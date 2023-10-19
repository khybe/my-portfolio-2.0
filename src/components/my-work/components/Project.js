import React from "react";
import styles from "./Project.module.css";

const Project = ({ project, onOpenModal }) => (
  <div className={styles["project-item"]}>
    <h3>{project.title}</h3>
    <a href={project.projectLink} target="_blank" rel="noreferrer">
      <img src={project.image} alt={project.title} />
    </a>
    <button
      className={styles["details-button"]}
      onClick={() => onOpenModal(project)}
    >
      Project Details
    </button>
  </div>
);

export default Project;
