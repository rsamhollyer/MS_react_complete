import React, { useState } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const isNameValid = enteredName.trim() !== '';

  const nameInputHander = e => {
    setEnteredName(e.target.value);
  };

  const nameBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const submitHandler = e => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if (!isNameValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  let isFormValid = false;
  if (isNameValid) {
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
          onChange={nameInputHander}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {!isNameValid && enteredNameTouched && (
          <p className="error-text">Name must not be empty</p>
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
