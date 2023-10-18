import React from "react";
import Project from "./Project";
import { projectsData } from "./projectsData";
import styles from "./ProjectList.module.css";

const ProjectList = ({ showMore }) => {
  const getProjectsToDisplay = () => {
    if (window.innerWidth <= 768) {
      return showMore ? projectsData : projectsData.slice(0, 3);
    } else if (window.innerWidth <= 992) {
      return showMore ? projectsData : projectsData.slice(0, 4);
    } else {
      return showMore ? projectsData : projectsData.slice(0, 3);
    }
  };

  return (
    <div className={styles.masonry}>
      {getProjectsToDisplay().map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
