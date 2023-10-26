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

  const inputClasses = hasError ? "form-control invalid" : "form-control";

  const conditionalLabel = isRequired ? `${label} *` : label;

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
        {hasError && <p className="error-text">{errorText}</p>}
      </div>
    );
  }

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
      {hasError && <p className="error-text">{errorText}</p>}
    </div>
  );
};

export default Input;
