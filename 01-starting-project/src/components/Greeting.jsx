import React, { useState } from 'react';
import Output from './Output';

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(prevState => !prevState);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>Nice to meet you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button type="button" onClick={changeTextHandler}>
        Change Text!
      </button>
    </div>
  );
}
