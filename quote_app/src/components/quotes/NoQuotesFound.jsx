import React from 'react';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => (
  <div className={classes.noquotes}>
    <p>No quotes found!</p>
    <a className="btn">Add a Quote</a>
  </div>
);

export default NoQuotesFound;
