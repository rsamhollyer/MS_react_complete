import React, { useRef, useState } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef();
  const nameInputHander = e => {
    setEnteredName(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const nameValue = nameInputRef.current.value;
    // nameInputRef.current.value = '' - This is not good practice because you should NOT manipulate the DOM directly
    setEnteredName('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputHander}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;
