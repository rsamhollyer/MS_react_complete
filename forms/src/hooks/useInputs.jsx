import { useState } from 'react';

export default function useInputs(validateValue) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateValue(enteredValue);

  const hasError = !isValueValid && isTouched;

  const inputHandler = e => {
    setEnteredValue(e.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    inputHandler,
    blurHandler,
    hasError,
    isValid: isValueValid,
    blur: isTouched,
    reset: resetInput,
  };
}
