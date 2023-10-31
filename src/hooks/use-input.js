import { useState } from "react"; // Import useState hook from React

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState(""); // State for the entered value
  const [IsTouched, setIsTouched] = useState(false); // State to track whether the input is touched

  const enteredValueIsValid = validateValue(enteredValue); // Check if the entered value is valid based on validation function
  const hasError = !enteredValueIsValid && IsTouched; // Determine if there's an error based on validation and touch status

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value); // Update the entered value on input change
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true); // Mark the input as touched on blur
  };

  const reset = () => {
    setEnteredValue(""); // Reset the entered value
    setIsTouched(false); // Reset the touched state
  };

  return {
    value: enteredValue, // Expose the entered value
    isValid: enteredValueIsValid, // Expose whether the entered value is valid
    hasError, // Expose if there's an error
    inputChangeHandler, // Expose the input change handler function
    inputBlurHandler, // Expose the input blur handler function
    reset, // Expose the reset function
  };
};

export default useInput; // Export the useInput custom hook as the default export
