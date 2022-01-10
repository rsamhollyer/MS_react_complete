import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = props => {
  const classStyleObject = {
    entering: 'ModalOpen',
    exiting: 'ModalClosed',
  };

  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="fade-slide"
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button type="button" className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
