/* eslint-disable react/button-has-type */
import React from 'react';
import classes from './Button.module.css'; // For css.modules

export default function Button({ type, children, onClick }) {
  return (
    <button type={type} className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
}

// export default styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   width: 100%;

//   &focus {
//     outline: none;
//   }

//   &hover,
//   &active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
//   @media (min-width: 768px) {
//     width: auto;
//   }
// `;
