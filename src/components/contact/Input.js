// Input.js (Generic Input Component)

import React from "react";
import "./Input.css";

const Input = (props) => {
  const {
    id,
    label,
    type,
    value,
    hasError,
    onChange,
    onBlur,
    placeholder,
    errorText,
    isRequired,
    name,
  } = props;

  // Define the CSS class based on the existence of an error
  const inputClasses = hasError ? "form-control invalid" : "form-control";

  // Create a conditional label with a '*' for required inputs
  const conditionalLabel = isRequired ? `${label} *` : label;

  // Conditional rendering for the textarea type input
  if (type === "textarea") {
    return (
      <div className={inputClasses}>
        <label htmlFor={id}>{conditionalLabel}</label>
        <textarea
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        {/* Render error text if hasError is true */}
        {hasError && <p className="error-text">{errorText}</p>}
      </div>
    );
  }

  // Default rendering for regular input elements
  return (
    <div className={inputClasses}>
      <label htmlFor={id}>{conditionalLabel}</label>
      <input
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {/* Render error text if hasError is true */}
      {hasError && <p className="error-text">{errorText}</p>}
    </div>
  );
};

export default Input;
