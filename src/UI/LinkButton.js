import React from "react";
import PropTypes from "prop-types";
import styles from "./LinkButton.module.css";

const LinkButton = ({ href, className, children }) => {
  return (
    <a
      href={href}
      className={`${styles.button} ${className || ""}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LinkButton;
