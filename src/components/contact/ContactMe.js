import ContactInfo from "./components/ContactInfo";
import Form from "./components/Form";
import useInput from "../../hooks/use-input";
import "./ContactMe.css";

const ContactMe = () => {
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

  const onFormSubmit = () => {
    if (formIsValid) {
      console.log("Submitted!");
      console.log({
        name: enteredName,
        email: enteredEmail,
        phone: enteredPhone,
        address: enteredAddress,
        subject: enteredSubject,
        message: enteredMessage,
      });
    }
  };

  const resetForm = () => {
    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetAddressInput();
    resetSubjectInput();
    resetMessageInput();
  };

  const nameInputConfig = {
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
    id: "phone",
    label: "Phone",
    type: "tel",
    isRequired: false,
    value: enteredPhone,
    onChange: phoneInputChangeHandler,
    placeholder: "Enter your phone number",
  };
  const addressInputConfig = {
    id: "address",
    label: "Address",
    type: "text",
    isRequired: false,
    value: enteredAddress,
    onChange: addressInputChangeHandler,
    placeholder: "Enter your address",
  };
  const subjectInputConfig = {
    id: "subject",
    label: "Subject",
    type: "text",
    isRequired: false,
    value: enteredSubject,
    onChange: subjectInputChangeHandler,
    placeholder: "Type your subject",
  };
  const messageInputConfig = {
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
      <ContactInfo />
      <Form
        formIsValid={formIsValid}
        onFormSubmit={onFormSubmit}
        nameInputConfig={nameInputConfig}
        emailInputConfig={emailInputConfig}
        phoneInputConfig={phoneInputConfig}
        addressInputConfig={addressInputConfig}
        subjectInputConfig={subjectInputConfig}
        messageInputConfig={messageInputConfig}
        resetForm={resetForm}
      />
    </section>
  );
};

export default ContactMe;
