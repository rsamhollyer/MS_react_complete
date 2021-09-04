import React from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const portal = document.querySelector('#overlays');

export default function Modal({ children }) {
  return (
    <>
      {createPortal(<Backdrop />, portal)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portal)}
    </>
  );
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}
function Backdrop() {
  return <div className={classes.backdrop} />;
}
