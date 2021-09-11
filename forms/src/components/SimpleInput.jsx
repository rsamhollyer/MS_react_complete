import React, { useRef, useState } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);

  // const nameInputRef = useRef();
  const nameInputHander = e => {
    setEnteredName(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (enteredName.trim() === '') {
      setIsNameValid(false);
      return;
    }

    // const nameValue = nameInputRef.current.value;

    // nameInputRef.current.value = '' - This is not good practice because you should NOT manipulate the DOM directly
    console.log(enteredName);
    setIsNameValid(true);
    setEnteredName('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${!isNameValid && 'invalid'}`}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputHander}
          value={enteredName}
        />
        {!isNameValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;
