import React from 'react';
import useInputs from '../hooks/useInputs';
import { validateEmail } from '../utils/validate-email';

const BasicForm = () => {
  const {
    value: firstNameValue,
    inputHandler: firstNameHandler,
    blurHandler: firstNameBlur,
    hasError: firstNameError,
    isValid: isFirstValid,
    reset: resetFirst,
  } = useInputs(value => value.trim() !== '');

  const {
    value: lastNameValue,
    inputHandler: lastNameHandler,
    blurHandler: lastNameBlur,
    hasError: lastNameError,
    isValid: isLastValid,
    reset: resetLast,
  } = useInputs(value => value.trim() !== '');

  const {
    value: emailValue,
    inputHandler: emailHandler,
    blurHandler: emailBlur,
    hasError: emailError,
    isValid: isEmailValid,
    reset: resetEmail,
  } = useInputs(validateEmail);

  let isFormValid = false;
  if (isEmailValid && isFirstValid && isLastValid) {
    isFormValid = true;
  }

  const submitHandler = e => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }
    resetEmail();
    resetFirst();
    resetLast();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameError && 'invalid'}`}>
          <label htmlFor="first_name">First Name</label>
          <input
            id="name"
            type="text"
            value={firstNameValue}
            onChange={firstNameHandler}
            onBlur={firstNameBlur}
          />
          {firstNameError && (
            <p className="error-text">Please enter your first name</p>
          )}
        </div>
        <div className={`form-control ${lastNameError && 'invalid'}`}>
          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            type="text"
            value={lastNameValue}
            onChange={lastNameHandler}
            onBlur={lastNameBlur}
          />
          {lastNameError && (
            <p className="error-text">Please enter your last name</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailError && 'invalid'}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          id="email"
          type="email"
          value={emailValue}
          onChange={emailHandler}
          onBlur={emailBlur}
        />
        {emailError && (
          <p className="error-text">Please enter a valid email address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
