import React, { useState } from "react";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"; // Import the 'Show Less' icon.
import { projectsData } from "./components/projectsData";
import "./MyWork.css";

const MyWork = () => {
  const [showMore, setShowMore] = useState(false);

  const projectsToDisplay = () => {
    if (window.innerWidth <= 768) {
      return showMore ? projectsData : projectsData.slice(0, 3);
    } else if (window.innerWidth <= 992) {
      return showMore ? projectsData : projectsData.slice(0, 4);
    } else {
      return showMore ? projectsData : projectsData.slice(0, 3);
    }
  };

  window.addEventListener("resize", () => {
    // Force re-render on window resize to update the number of projects displayed
    setShowMore(false);
  });

  return (
    <section id="projects">
      <h2>MY WORK</h2>
      <div className="masonry">
        {projectsToDisplay().map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <a href={project.projectLink} target="_blank" rel="noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <button className="details-button">Project Details</button>
          </div>
        ))}
      </div>
      {!showMore ? (
        <button className="show-more-button" onClick={() => setShowMore(true)}>
          <span className="show-more-label">Show More</span>
          <AiOutlineDown className="scroll-down-icon" />
        </button>
      ) : (
        <button className="show-more-button" onClick={() => setShowMore(false)}>
          <span className="show-more-label">Show Less</span>
          <AiOutlineUp className="scroll-up-icon" />
        </button>
      )}
    </section>
  );
};

export default MyWork;
