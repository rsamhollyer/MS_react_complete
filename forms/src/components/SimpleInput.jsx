import React from 'react';
import useInputs from '../hooks/useInputs';
import { validateEmail } from '../utils/validate-email';

const SimpleInput = () => {
  const {
    value: nameValue,
    inputHandler: nameHandler,
    blurHandler: nameBlur,
    hasError: nameError,
    isValid: isNameValid,
    reset: resetName,
  } = useInputs(value => value.trim() !== '');

  const {
    value: emailValue,
    inputHandler: emailHandler,
    blurHandler: emailBlur,
    hasError: emailError,
    isValid: isEmailValid,
    reset: resetEmail,
  } = useInputs(validateEmail);

  const submitHandler = e => {
    e.preventDefault();

    if (!isNameValid) {
      return;
    }
    resetName();
    resetEmail();
  };

  let isFormValid = false;
  if (isNameValid && isEmailValid) {
    isFormValid = true;
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameError && 'invalid'}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameHandler}
          onBlur={nameBlur}
          value={nameValue}
        />
        {nameError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={`form-control ${emailError && 'invalid'}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailHandler}
          onBlur={emailBlur}
          value={emailValue}
        />
        {emailError && <p className="error-text">Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
