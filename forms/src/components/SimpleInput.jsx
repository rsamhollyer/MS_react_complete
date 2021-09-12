import React, { useState } from 'react';
import validateEmail from '../utils/validate-email';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const isNameValid = enteredName.trim() !== '';
  const isEmailValid = validateEmail(enteredEmail);

  const inputHandler = e => {
    switch (e.target.id) {
      case 'name':
        setEnteredName(e.target.value);
        break;

      case 'email':
        setEnteredEmail(e.target.value);
        break;
      default:
    }
  };

  const blurHandler = e => {
    switch (e.target.id) {
      case 'name':
        setEnteredNameTouched(true);
        break;

      case 'email':
        setEnteredEmailTouched(true);
        break;
      default:
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!isNameValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  let isFormValid = false;
  if (isNameValid && isEmailValid) {
    isFormValid = true;
  }

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`form-control ${
          !isNameValid && enteredNameTouched && 'invalid'
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputHandler}
          onBlur={blurHandler}
          value={enteredName}
        />
        {!isNameValid && enteredNameTouched && (
          <p className="error-text">Name must not be empty</p>
        )}

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={inputHandler}
          onBlur={blurHandler}
          value={enteredEmail}
        />
        {!isEmailValid && enteredEmailTouched && (
          <p className="error-text">Email must be valid</p>
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
export default SimpleInput;
