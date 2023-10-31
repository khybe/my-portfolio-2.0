import React, { useState, useEffect } from "react"; // Import React and necessary hooks
import Fade from "react-reveal/Fade"; // Import Fade effect for animations

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"; // Import icons from react-icons/ai library
import { projectsData } from "./components/projectsData"; // Import project data

import ProjectList from "./components/ProjectList"; // Import the ProjectList component
import DetailModal from "./components/DetailModal"; // Import the DetailModal component
import "./MyWork.css"; // Import styles for MyWork component

const MyWork = () => {
  const [showMore, setShowMore] = useState(false); // State for handling show more/less
  const [selectedProject, setSelectedProject] = useState(null); // State for the selected project

  const handleResize = () => {
    setShowMore(false); // Reset showMore state on window resize
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); // Event listener for window resize
    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);

  const openModalHandler = (project) => {
    setSelectedProject(project); // Set the selected project for modal
  };

  const closeModalHandler = () => {
    setSelectedProject(null); // Close the modal by resetting the selected project
  };

  return (
    <section id="projects">
      <Fade right>
        <h2>MY WORK</h2> {/* Title for My Work section with animation */}
      </Fade>
      <Fade left>
        <ProjectList
          showMore={showMore} // Pass the showMore state to the ProjectList component
          onOpenModal={openModalHandler} // Handler for opening modal
          projectsData={projectsData} // Pass project data to the ProjectList component
        />
      </Fade>
      <button
        className="show-more-button"
        onClick={() => setShowMore(!showMore)} // Toggle the showMore state on button click
      >
        <span className="show-more-label">
          {showMore ? "Show Less" : "Show More"} {/* Toggle button label based on showMore state */}
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

export default MyWork; // Export the MyWork component as the default export

