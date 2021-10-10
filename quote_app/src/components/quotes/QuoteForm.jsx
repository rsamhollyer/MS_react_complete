import React, { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './QuoteForm.module.css';

const QuoteForm = props => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusHandler = () => {
    setIsFocused(true);
  };

  const formComplete = () => {
    setIsFocused(false);
  };

  return (
    <>
      <Prompt
        when={isFocused}
        message={() => 'Are you sure you want to leave and lose all your data?'}
      />
      <Card>
        <form
          className={styles.form}
          onSubmit={submitFormHandler}
          onFocus={formFocusHandler}
        >
          {props.isLoading && (
            <div className={styles.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={styles.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef} />
          </div>
          <div className={styles.actions}>
            <button onClick={formComplete} type="submit" className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
