import React from "react"; // Import React library
import Project from "./Project"; // Import the Project component
import styles from "./ProjectList.module.css"; // Import styles from the ProjectList module

const ProjectList = ({ projectsData, showMore, onOpenModal }) => {
  // Function to determine the number of projects to display based on window width
  const getProjectsToDisplay = () => {
    // Check window width and adjust the number of displayed projects accordingly
    if (window.innerWidth <= 768) {
      return showMore ? projectsData : projectsData.slice(0, 3); // For smaller screens, display 3 projects if showMore is false
    } else if (window.innerWidth <= 992) {
      return showMore ? projectsData : projectsData.slice(0, 4); // For medium screens, display 4 projects if showMore is false
    } else {
      return showMore ? projectsData : projectsData.slice(0, 3); // For larger screens, display 3 projects if showMore is false
    }
  };

  // Display the list of projects based on the result of getProjectsToDisplay
  return (
    <div className={styles.masonry}>
      {getProjectsToDisplay().map((project, index) => (
        <Project key={index} project={project} onOpenModal={onOpenModal} />
      ))}
    </div>
  );
};

export default ProjectList; // Export the ProjectList component as the default export
