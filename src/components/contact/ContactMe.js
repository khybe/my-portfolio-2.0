import { useState } from "react";
import ContactInfo from "./components/ContactInfo";
import Button from "../../UI/Button";
import useInput from "../../hooks/use-input";
import "./ContactMe.css";

const ContactMe = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

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

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      console.log("Submitted!");
      console.log(
        enteredName,
        enteredEmail,
        enteredPhone,
        enteredAddress,
        enteredSubject,
        enteredMessage
      );

      setFormIsSubmitted(true);

      resetNameInput();
      resetEmailInput();
      resetPhoneInput();
      resetAddressInput();
      resetSubjectInput();
      resetMessageInput();
    }
  };

  const nameInputClasses = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  const messageInputClasses = enteredMessageIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <section id="contact">
      <ContactInfo />
      <form onSubmit={submitHandler}>
        <div className="control-group">
          <div className={nameInputClasses}>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              placeholder="Enter your name"
            />
            {enteredNameIsInvalid && (
              <p className="error-text">Name input can not be empty.</p>
            )}
          </div>
          <div className={emailInputClasses}>
            <label htmlFor="email">Email *</label>
            <input
              type="text"
              id="email"
              value={enteredEmail}
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
              placeholder="Enter your email"
            />
            {enteredEmailIsInvalid && (
              <p className="error-text">Please enter a valid email.</p>
            )}
          </div>
        </div>
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              value={enteredPhone}
              onChange={phoneInputChangeHandler}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-control">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={enteredAddress}
              onChange={addressInputChangeHandler}
              placeholder="Enter your address"
            />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={enteredSubject}
            onChange={subjectInputChangeHandler}
            placeholder="Type your subject"
          />
        </div>
        <div className={messageInputClasses}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            value={enteredMessage}
            onChange={messageInputChangeHandler}
            onBlur={MessageInputBlurHandler}
            placeholder="Type your message here..."
          />
          {enteredMessageIsInvalid && (
            <p className="error-text">
              Message has to be at least 50 characters.
            </p>
          )}
        </div>
        <div className="form-actions">
          <Button className="form-button" disabled={!formIsValid}>
            Submit
          </Button>
        </div>
        {formIsSubmitted && (
          <div className="submission-confirmation">
            <p>Thanks for submitting!</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactMe;
