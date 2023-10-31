import { useState } from "react";
import Fade from "react-reveal/Fade"; // Importing the Fade effect
import Input from "./Input"; // Importing the Input component
import Button from "../../../UI/Button"; // Importing the Button component
import "./Form.css"; // Importing the CSS for the Form component

// Form component
const Form = (props) => {
  const {
    formIsValid,
    onSubmit,
    resetForm,
    nameInputConfig,
    emailInputConfig,
    phoneInputConfig,
    addressInputConfig,
    subjectInputConfig,
    messageInputConfig,
    formRef,
  } = props; // Destructuring props

  const [formIsSubmitted, setFormIsSubmitted] = useState(false); // State to manage form submission

  // Function to handle form submission
  const submitHandler = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (onSubmit) {
      onSubmit(event); // Invoking the provided onSubmit function
    }

    setFormIsSubmitted(true); // Set formIsSubmitted state to true
    resetForm(); // Reset the form inputs
  };

  // Render the form elements
  return (
    <form ref={formRef} onSubmit={submitHandler}>
      <Fade right>
        {/* Apply the Fade effect to form content */}
        <div className="control-group">
          {/* Wrapper for input groups */}
          <Input {...nameInputConfig} />
          {/* Render input with provided configuration */}
          <Input {...emailInputConfig} />
        </div>
        <div className="control-group">
          <Input {...phoneInputConfig} />
          <Input {...addressInputConfig} />
        </div>
        <Input {...subjectInputConfig} />
        <Input {...messageInputConfig} />
        <div className="form-actions">
          {/* Form action container */}
          <Button className="form-button" type="submit" disabled={!formIsValid}>
            {/* Submit button */}
            Submit
          </Button>
        </div>
      </Fade>
      {/* Display a confirmation message if the form has been submitted */}
      {formIsSubmitted && (
        <div className="submission-confirmation">
          <p>
            Thanks for reaching out! I will get back to you as soon as possible.
          </p>
        </div>
      )}
    </form>
  );
};

export default Form; // Export the Form component
