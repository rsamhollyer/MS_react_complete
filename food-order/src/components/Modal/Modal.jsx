import React from 'react';
import { createPortal } from 'react-dom';
import useKeyPress from '../../hooks/useKeyPress';
import classes from './Modal.module.css';

const portal = document.querySelector('#overlays');

export default function Modal({ children, onClose }) {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portal)}
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
function Backdrop({ onClose }) {
  const keyPress = useKeyPress(['Escape'], () => {
    onClose();
  });

  return (
    <div
      className={classes.backdrop}
      onClick={onClose}
      onKeyDown={keyPress}
      role="button"
      tabIndex={0}
      aria-label="Close Modal With Escape"
    />
  );
}
