import React, { useState } from 'react';

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(prevState => !prevState);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>Nice to meet you!</p>}
      {changedText && <p>Changed!</p>}
      <button type="button" onClick={changeTextHandler}>
        Change Text!
      </button>
    </div>
  );
}
