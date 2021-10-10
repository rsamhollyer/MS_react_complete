import React from 'react';
import CommentItem from './CommentItem';
import styles from './CommentsList.module.css';

const CommentsList = props => (
  <ul className={styles.comments}>
    {props.comments.map(comment => (
      <CommentItem key={comment.id} text={comment.text} />
    ))}
  </ul>
);

export default CommentsList;
