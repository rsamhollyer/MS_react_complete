import React, { useEffect, useRef } from 'react';
import useHttp from '../../hooks/useHttp';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './NewCommentForm.module.css';

const NewCommentForm = ({ onAddedComment, quoteId }) => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = event => {
    event.preventDefault();
    const text = commentTextRef.current.value;
    console.log(text);
    // optional: Could validate here

    sendRequest({ commentData: { text }, quoteId });
    commentTextRef.current.value = '';
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={styles.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef} />
      </div>
      <div className={styles.actions}>
        <button type="submit" className="btn">
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
