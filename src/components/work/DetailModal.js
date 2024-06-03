import React from "react"; // Import React library
import ReactDOM from "react-dom"; // Import ReactDOM library
import { AiOutlineClose } from "react-icons/ai"; // Import Close icon from react-icons

import Button from "../../UI/Button"; // Import Button component
import Backdrop from "../../UI/Backdrop"; // Import Backdrop component
import styles from "./DetailModal.module.css"; // Import styles from DetailModal module

const DetailModal = ({ project, onCloseModal, onOpenModal }) => {
  const closeModalHandler = () => {
    onCloseModal(); // Function to close the modal
  };

  // Styles for the modal animation and visibility
  const modalStyles = {
    transform: onOpenModal ? "translate(-50%, -50%)" : "translate(-50%, -150%)",
    opacity: onOpenModal ? 1 : 0,
  };

  // Create a portal to render modal and backdrop outside the root element
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={closeModalHandler} />{" "}
      {/* Render the Backdrop component */}
      <div
        className={`${styles.modal} ${onOpenModal ? styles.active : ""}`} // Apply styles for the modal
        style={modalStyles} // Apply animation styles
      >
        <div className={styles["detail-content"]}>
          <AiOutlineClose
            onClick={closeModalHandler} // Function to close the modal on Close icon click
            className={styles["detail-content__close-icon"]} // Apply styles to Close icon
            size="2.5rem" // Set the size of the Close icon
          />
          <h2>{project.title}</h2> {/* Display the project title */}
          <div className={styles["detail-description"]}>
            <p>{project.description}</p> {/* Display the project description */}
          </div>
          <div className={styles["detail-toolSet"]}>
            <h5>Built With :</h5> {/* Title for the tools used section */}
            {project.toolSet && (
              <ul>
                {project.toolSet.map((tool) => (
                  <li>- {tool}</li> /* Display each tool used */
                ))}
              </ul>
            )}
          </div>
          <footer className={styles["detail-content__actions"]}>
            {project.projectLink && (
              <Button
                className={styles["detail-content__button"]} // Apply styles to the website button
                href={project.projectLink} // Provide project link
              >
                Website {/* Display Website button */}
              </Button>
            )}
            {project.githubLink && (
              <Button
                className={styles["detail-content__button"]} // Apply styles to the Github button
                href={project.githubLink} // Provide GitHub link
              >
                Github {/* Display Github button */}
              </Button>
            )}
          </footer>
        </div>
      </div>
    </>,
    document.getElementById("modal-hook") // Render modal content inside the element with the ID "modal-hook"
  );
};

export default DetailModal; // Export the DetailModal component as the default export
