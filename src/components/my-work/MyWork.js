import React, { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import ProjectList from "./components/ProjectList";
import "./MyWork.css";

const MyWork = () => {
  const [showMore, setShowMore] = useState(false);

  const handleResize = () => {
    setShowMore(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="projects">
      <h2>MY WORK</h2>
      <ProjectList showMore={showMore} />
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
    </section>
  );
};

export default MyWork;
