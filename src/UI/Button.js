import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ href, className, children, ...restProps }) => {
  if (href) {
    // If href is provided, render a link
    return (
      <a
        href={href}
        className={`${styles.button} ${className || ""}`}
        target="_blank"
        rel="noopener noreferrer"
        {...restProps}
      >
        {children}
      </a>
    );
  } else {
    // If href is not provided, render a button
    return (
      <button className={`${styles.button} ${className || ""}`} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
