import React from 'react';
import classes from './QuoteItem.module.css';

const QuoteItem = props => (
  <li className={classes.item}>
    <figure>
      <blockquote>
        <p>{props.text}</p>
      </blockquote>
      <figcaption>{props.author}</figcaption>
    </figure>
    <a className="btn">View Fullscreen</a>
  </li>
);

export default QuoteItem;
