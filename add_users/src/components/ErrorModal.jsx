import React from 'react';
import { createPortal } from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './styles/ErrorModal.module.css';
import useKeyPress from './hooks/useKeyPress';

function BackDrop({ onConfirm }) {
  const keyPress = useKeyPress(['Escape'], () => {
    onConfirm();
  });
  return (
    <div
      className={classes.backdrop}
      onClick={onConfirm}
      onKeyDown={keyPress}
      role="button"
      tabIndex={0}
      aria-label="Close Modal With Escape"
    />
  );
}

function ModalOverlay({ message, title, onConfirm }) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}
/* 

The above functions are React components, but they are only necessary to this ErrorModal component, so it's not necessary to create another component.

The createPortal function allows us to control the actual DOM layout of particular elements to better account for web accessibility issues. These two components now hook into the DOM at the divs I created in index.html

*/
export default function ErrorModal({ onConfirm, title, message }) {
  return (
    <>
      {createPortal(
        <BackDrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <ModalOverlay message={message} title={title} onConfirm={onConfirm} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}
