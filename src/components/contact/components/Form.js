import { useState } from "react";
import Input from "./Input";
import Button from "../../../UI/Button";
import "./Form.css";

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
  } = props;

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }

    setFormIsSubmitted(true);
    resetForm();
  };

  return (
    <form ref={formRef} onSubmit={submitHandler}>
      <div className="control-group">
        <Input {...nameInputConfig} />
        <Input {...emailInputConfig} />
      </div>
      <div className="control-group">
        <Input {...phoneInputConfig} />
        <Input {...addressInputConfig} />
      </div>
      <Input {...subjectInputConfig} />
      <Input {...messageInputConfig} />
      <div className="form-actions">
        <Button className="form-button" type="submit" disabled={!formIsValid}>
          Submit
        </Button>
      </div>
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

export default Form;
