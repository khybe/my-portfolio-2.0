import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import ContactInfo from "./components/ContactInfo";
import Form from "./components/Form";
import useInput from "../../hooks/use-input";
import "./ContactMe.css";

const ContactMe = () => {
  const form = useRef(); // Create a reference to the form for sending email

  // Handling different input fields using custom hook useInput for form validation
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameIsInvalid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsInvalid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  );

  const {
    value: enteredPhone,
    inputChangeHandler: phoneInputChangeHandler,
    reset: resetPhoneInput,
  } = useInput(() => true); // No specific validation for optional input, always valid

  const {
    value: enteredAddress,
    inputChangeHandler: addressInputChangeHandler,
    reset: resetAddressInput,
  } = useInput(() => true); // No specific validation for optional input, always valid

  const {
    value: enteredSubject,
    inputChangeHandler: subjectInputChangeHandler,
    reset: resetSubjectInput,
  } = useInput(() => true); // No specific validation for optional input, always valid

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: enteredMessageIsInvalid,
    inputChangeHandler: messageInputChangeHandler,
    inputBlurHandler: MessageInputBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.length >= 50);

  // Checking if the form is valid based on input field validations
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  // Sending email on form submission
  const sendEmail = (e) => {
    e.preventDefault();

    if (formIsValid) {
      // Using emailjs to send the form data
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_KEY,
          process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text); // Log email send result
            console.log({
              name: enteredName,
              email: enteredEmail,
              phone: enteredPhone,
              address: enteredAddress,
              subject: enteredSubject,
              message: enteredMessage,
            }); // Log the form data
          },
          (error) => {
            console.log(error.text); // Log any error during email sending
          }
        );
    }
  };

  // Resetting form inputs
  const resetForm = () => {
    // Reset each input field
    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetAddressInput();
    resetSubjectInput();
    resetMessageInput();
  };

  // Configuration for input fields in the contact form
  // This data is passed to the Form component to render the form fields
  const nameInputConfig = {
    name: "user_name",
    id: "name",
    label: "Name",
    type: "text",
    isRequired: true,
    value: enteredName,
    onChange: nameInputChangeHandler,
    onBlur: nameInputBlurHandler,
    hasError: enteredNameIsInvalid,
    errorText: "Name input can not be empty.",
    placeholder: "Enter your name",
  };
  const emailInputConfig = {
    name: "user_email",
    id: "email",
    label: "Email",
    type: "text",
    isRequired: true,
    value: enteredEmail,
    onChange: emailInputChangeHandler,
    onBlur: emailInputBlurHandler,
    hasError: enteredEmailIsInvalid,
    errorText: "Please enter a valid email.",
    placeholder: "Enter your email",
  };
  const phoneInputConfig = {
    name: "user_phone",
    id: "phone",
    label: "Phone",
    type: "tel",
    isRequired: false,
    value: enteredPhone,
    onChange: phoneInputChangeHandler,
    placeholder: "Enter your phone number",
  };
  const addressInputConfig = {
    name: "user_address",
    id: "address",
    label: "Address",
    type: "text",
    isRequired: false,
    value: enteredAddress,
    onChange: addressInputChangeHandler,
    placeholder: "Enter your address",
  };
  const subjectInputConfig = {
    name: "user_subject",
    id: "subject",
    label: "Subject",
    type: "text",
    isRequired: false,
    value: enteredSubject,
    onChange: subjectInputChangeHandler,
    placeholder: "Type your subject",
  };
  const messageInputConfig = {
    name: "user_message",
    id: "message",
    label: "Message",
    type: "textarea",
    isRequired: true,
    value: enteredMessage,
    onChange: messageInputChangeHandler,
    onBlur: MessageInputBlurHandler,
    hasError: enteredMessageIsInvalid,
    errorText: "Message must be at least 50 characters.",
    placeholder: "Type your message here...",
  };

  return (
    <section id="contact">
      {/* Render contact information */}
      <ContactInfo />
      {/* Render the Form component with input field configurations */}
      <Form
        formIsValid={formIsValid}
        nameInputConfig={nameInputConfig}
        emailInputConfig={emailInputConfig}
        phoneInputConfig={phoneInputConfig}
        addressInputConfig={addressInputConfig}
        subjectInputConfig={subjectInputConfig}
        messageInputConfig={messageInputConfig}
        resetForm={resetForm}
        onSubmit={sendEmail}
        formRef={form}
      />
    </section>
  );
};

export default ContactMe;
