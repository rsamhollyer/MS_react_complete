import React from 'react';
import classes from './HighlightedQuote.module.css';

const HighlightedQuote = props => (
  <figure className={classes.quote}>
    <p>{props.text}</p>
    <figcaption>{props.author}</figcaption>
  </figure>
);

export default HighlightedQuote;
