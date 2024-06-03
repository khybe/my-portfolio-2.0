import React, { useState, useEffect, useMemo } from "react"; // Import React and necessary hooks
import Fade from "react-reveal/Fade"; // Import Fade effect for animations

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"; // Import icons from react-icons/ai library
import { projectsData } from "../components/work/projectsData"; // Import project data

import ProjectList from "../components/work/ProjectList"; // Import the ProjectList component
import DetailModal from "../components/work/DetailModal"; // Import the DetailModal component
import "./CSS/WorkPage.css"; // Import styles for MyWork component

const WorkPage = () => {
  const [showMore, setShowMore] = useState(false); // State for handling show more/less
  const [selectedProject, setSelectedProject] = useState(null); // State for the selected project

  const handleResize = useMemo(() => {
    setShowMore(false); // Reset showMore state on window resize
  }, [setShowMore]);

  useEffect(() => {
    window.addEventListener("resize", handleResize); // Event listener for window resize
    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, [handleResize]);

  const openModalHandler = (project) => {
    setSelectedProject(project); // Set the selected project for modal
  };

  const closeModalHandler = () => {
    setSelectedProject(null); // Close the modal by resetting the selected project
  };

  return (
    <section id="projects">
      <Fade right>
        <h2>SELECTED WORKS</h2> {/* Title for My Work section with animation */}
      </Fade>
      <Fade left>
        <ProjectList
          showMore={showMore} // Pass the showMore state to the ProjectList component
          onOpenModal={openModalHandler} // Handler for opening modal
          projectsData={projectsData} // Pass project data to the ProjectList component
        />
      </Fade>
      {showMore && (
        <p className="more-projects-visit">
          Explore more of my work on
          <a
            href="https://github.com/khybe?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      )}
      <button
        className="show-more-button"
        onClick={() => setShowMore(!showMore)} // Toggle the showMore state on button click
      >
        <span className="show-more-label">
          {showMore ? "Show Less" : "Show More"}{" "}
          {/* Toggle button label based on showMore state */}
        </span>
        {showMore ? (
          <AiOutlineUp className="scroll-up-icon" /> // Show scroll-up icon if showMore is true
        ) : (
          <AiOutlineDown className="scroll-down-icon" /> // Show scroll-down icon if showMore is false
        )}
      </button>
      {selectedProject && (
        <DetailModal
          project={selectedProject} // Pass the selected project to DetailModal component
          onCloseModal={closeModalHandler} // Handler for closing the modal
          onOpenModal={openModalHandler} // Handler for opening the modal
        />
      )}
    </section>
  );
};

export default WorkPage; // Export the MyWork component as the default export
