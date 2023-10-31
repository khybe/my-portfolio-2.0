import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { projectsData } from "./components/projectsData";

import ProjectList from "./components/ProjectList";
import DetailModal from "./components/DetailModal";
import "./MyWork.css";

const MyWork = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleResize = () => {
    setShowMore(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModalHandler = (project) => {
    setSelectedProject(project);
  };

  const closeModalHandler = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <Fade right>
        <h2>MY WORK</h2>
      </Fade>
      <Fade left>
        <ProjectList
          showMore={showMore}
          onOpenModal={openModalHandler}
          projectsData={projectsData}
        />
      </Fade>
      <button
        className="show-more-button"
        onClick={() => setShowMore(!showMore)}
      >
        <span className="show-more-label">
          {showMore ? "Show Less" : "Show More"}
        </span>
        {showMore ? (
          <AiOutlineUp className="scroll-up-icon" />
        ) : (
          <AiOutlineDown className="scroll-down-icon" />
        )}
      </button>
      {selectedProject && (
        <DetailModal
          project={selectedProject}
          onCloseModal={closeModalHandler}
          onOpenModal={openModalHandler}
        />
      )}
    </section>
  );
};

export default MyWork;
