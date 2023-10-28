import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../../../UI/Button";
import Backdrop from "../../../UI/Backdrop"; // Assuming Backdrop is in the same directory
import styles from "./DetailModal.module.css";

const DetailModal = ({ project, onCloseModal, onOpenModal }) => {
  const closeModalHandler = () => {
    onCloseModal();
  };

  const modalStyles = {
    transform: onOpenModal ? "translate(-50%, -50%)" : "translate(-50%, -150%)",
    opacity: onOpenModal ? 1 : 0,
  };

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={closeModalHandler} />
      <div
        className={`${styles.modal} ${onOpenModal ? styles.active : ""}`}
        style={modalStyles}
      >
        <div className={styles["detail-content"]}>
          <AiOutlineClose
            onClick={closeModalHandler}
            className={styles["detail-content__close-icon"]}
            size="2.5rem"
          />
          <h2>{project.title}</h2>
          <div className={styles["detail-description"]}>
            <p>{project.description}</p>
          </div>
          <div className={styles["detail-toolSet"]}>
            <h5>Built With :</h5>
            {project.toolSet && (
              <ul>
                {project.toolSet.map((tool) => (
                  <li>- {tool}</li>
                ))}
              </ul>
            )}
          </div>
          <footer className={styles["detail-content__actions"]}>
            {project.projectLink && (
              <Button
                className={styles["detail-content__button"]}
                href={project.projectLink}
              >
                Website
              </Button>
            )}
            {project.githubLink && (
              <Button
                className={styles["detail-content__button"]}
                href={project.githubLink}
              >
                Github
              </Button>
            )}
          </footer>
        </div>
      </div>
    </>,
    document.getElementById("modal-hook")
  );
};

export default DetailModal;
