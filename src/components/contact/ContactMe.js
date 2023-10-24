import { useState } from "react";
import ContactInfo from "./components/ContactInfo";
import Input from "./components/Input";
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

  const nameInputConfig = {
    id: "name",
    label: "Name",
    type: "text",
    isRequired: true,
  };

  const emailInputConfig = {
    id: "email",
    label: "Email",
    type: "text",
    isRequired: true,
  };

  const phoneInputConfig = {
    id: "phone",
    label: "Phone",
    type: "tel",
    isRequired: false, // Not required
  };

  const addressInputConfig = {
    id: "address",
    label: "Address",
    type: "text",
    isRequired: false, // Not required
  };

  const subjectInputConfig = {
    id: "subject",
    label: "Subject",
    type: "text",
    isRequired: false, // Not required
  };

  const messageInputConfig = {
    id: "message",
    label: "Message",
    type: "textarea",
    isRequired: true,
  };

  return (
    <section id="contact">
      <ContactInfo />
      <form onSubmit={submitHandler}>
        <div className="control-group">
          <Input
            {...nameInputConfig}
            value={enteredName}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            hasError={enteredNameIsInvalid}
            errorText="Name input can not be empty."
            placeholder="Enter your name"
          />
          <Input
            {...emailInputConfig}
            value={enteredEmail}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            hasError={enteredEmailIsInvalid}
            errorText="Please enter a valid email."
            placeholder="Enter your email"
          />
        </div>
        <div className="control-group">
          <Input
            {...phoneInputConfig}
            value={enteredPhone}
            onChange={phoneInputChangeHandler}
            placeholder="Enter your phone number"
          />
          <Input
            {...addressInputConfig}
            value={enteredAddress}
            onChange={addressInputChangeHandler}
            placeholder="Enter your address"
          />
        </div>
        <Input
          {...subjectInputConfig}
          value={enteredSubject}
          onChange={subjectInputChangeHandler}
          placeholder="Type your subject"
        />
        <Input
          {...messageInputConfig}
          value={enteredMessage}
          onChange={messageInputChangeHandler}
          onBlur={MessageInputBlurHandler}
          hasError={enteredMessageIsInvalid}
          errorText="Message has to be at least 50 characters."
          placeholder="Type your message here..."
        />
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
