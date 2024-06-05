import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../../UI/Button";
import Modal from "../../UI/Modal";

import styles from "./DetailModal.module.css";

const DetailModal = ({ project, onCloseModal, onOpenModal }) => {
  const modalContent = (
    <div className={styles["detail-content"]}>
      <AiOutlineClose
        onClick={onCloseModal}
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
            {project.toolSet.map((tool, index) => (
              <li key={index}>- {tool}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <Modal
      show={onOpenModal}
      onCancel={onCloseModal}
      header={project.title}
      footer={
        <>
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
        </>
      }
    >
      {modalContent}
    </Modal>
  );
};

export default DetailModal;
