import React from "react"; // Import React library
import PropTypes from "prop-types"; // Import PropTypes for type checking
import styles from "./Button.module.css"; // Import styles from the Button module

const Button = ({ href, className, children, ...restProps }) => {
  if (href) {
    // If href is provided, render a link
    return (
      <a
        href={href} // Set the link URL
        className={`${styles.button} ${className || ""}`} // Apply styles and additional class name if provided
        target="_blank" // Open link in a new tab/window
        rel="noopener noreferrer" // Security attribute to prevent security risks
        {...restProps} // Spread any other provided props
      >
        {children} {/* Render the content within the link */}
      </a>
    );
  } else {
    // If href is not provided, render a button
    return (
      <button className={`${styles.button} ${className || ""}`} {...restProps}>
        {children} {/* Render the content within the button */}
      </button>
    );
  }
};

Button.propTypes = {
  href: PropTypes.string, // The link URL should be a string
  className: PropTypes.string, // The class name should be a string
  children: PropTypes.node.isRequired, // The content within the Button component is required
};

export default Button; // Export the Button component as the default export
