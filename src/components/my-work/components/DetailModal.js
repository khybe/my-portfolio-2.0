import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import LinkButton from "../../../UI/LinkButton";
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
          <p>{project.description}</p>
          <footer className={styles["detail-content__actions"]}>
            {project.projectLink && (
              <LinkButton
                className={styles["detail-content__button"]}
                href={project.projectLink}
              >
                Website
              </LinkButton>
            )}
            {project.githubLink && (
              <LinkButton
                className={styles["detail-content__button"]}
                href={project.githubLink}
              >
                Github
              </LinkButton>
            )}
          </footer>
        </div>
      </div>
    </>,
    document.getElementById("modal-hook")
  );
};

export default DetailModal;
