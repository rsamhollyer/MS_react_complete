import React from 'react';
import styles from './CommentItem.module.css';

const CommentItem = props => (
  <li className={styles.item}>
    <p>{props.text}</p>
  </li>
);

export default CommentItem;
