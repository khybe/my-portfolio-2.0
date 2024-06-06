import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Fade from "react-reveal/Fade"; // Importing the Fade effect

import Input from "./Input"; // Importing the Input component
import Button from "../../UI/Button"; // Importing the Button component
import LoadingSpinner from "../../UI/LoadingSpinner";
import ErrorModal from "../../UI/ErrorModal";
import Modal from "../../UI/Modal";

import "./ContactForm.css"; // Importing the CSS for the Form component

// Form component
const Form = (props) => {
  const {
    formIsValid,
    resetForm,
    nameInputConfig,
    emailInputConfig,
    phoneInputConfig,
    addressInputConfig,
    subjectInputConfig,
    messageInputConfig,
    formRef,
  } = props; // Destructuring props
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null); // State to manage form submission
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error messages
  const navigate = useNavigate();

  // Function to handle form submission
  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return; // If form is not valid, do not proceed
    }

    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    try {
      // Using emailjs to send the form data
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_KEY,
        process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      console.log(result.text); // Log email send result
      console.log({
        name: nameInputConfig.value,
        email: emailInputConfig.value,
        phone: phoneInputConfig.value,
        address: addressInputConfig.value,
        subject: subjectInputConfig.value,
        message: messageInputConfig.value,
      });
      setSuccessMessage(
        "Thanks for reaching out! I will get back to you as soon as possible."
      );
      setShowSuccessModal(true);
      resetForm(); // Reset the form inputs
    } catch (error) {
      console.error(error.text); // Log any error during email sending
      setError("Failed to send the email. Please try again later."); // Set error message
    } finally {
      setIsLoading(false);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/");
  };

  // Render the form elements
  return (
    <React.Fragment>
      <Modal
        show={showSuccessModal}
        onCancel={closeSuccessModal}
        headerClass="success-header"
        header="Message send successfully"
        footer={
          <Button onClick={closeSuccessModal} className="success-btn">
            Close
          </Button>
        }
      >
        <p className="success-msg">{successMessage}</p>
      </Modal>
      <ErrorModal error={error} onClear={errorHandler} />
      <form ref={formRef} onSubmit={submitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
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
            <Button
              className="form-button"
              type="submit"
              disabled={!formIsValid}
            >
              {/* Submit button */}
              Submit
            </Button>
          </div>
        </Fade>
      </form>
    </React.Fragment>
  );
};

export default Form; // Export the Form component
