import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './styles/ErrorModal.module.css';
import useKeyPress from './hooks/useKeyPress';

export default function ErrorModal({ onConfirm, title, message }) {
  useKeyPress('Escape', () => {
    onConfirm();
  });
  return (
    <div>
      <div
        className={classes.backdrop}
        onClick={onConfirm}
        role="presentation"
      />
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
    </div>
  );
}
