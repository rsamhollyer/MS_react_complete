import React from 'react';
import { createPortal } from 'react-dom';
import useKeyPress from '../../hooks/useKeyPress';
import classes from './Modal.module.css';

const portal = document.querySelector('#overlays');

export default function Modal({ children, onClose }) {
  useKeyPress({ Escape: onClose });
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portal)}
      {createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        portal
      )}
    </>
  );
}

function ModalOverlay({ children, onClose }) {
  return (
    <div className={classes.modal}>
      <header>
        Modal Header
        <button type="button" title="close modal" onClick={onClose}>
          X
        </button>
      </header>
      <div className={classes.content}>{children}</div>
    </div>
  );
}
function Backdrop() {
  return <div className={classes.backdrop} />;
}
