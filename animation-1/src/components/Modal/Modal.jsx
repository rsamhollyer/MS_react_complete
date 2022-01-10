import React from 'react';
import { Transition } from 'react-transition-group';
import './Modal.css';

const modal = props => {
  const classStyleObject = {
    entering: 'ModalOpen',
    exiting: 'ModalClosed',
  };

  return (
    <Transition in={props.show} timeout={300} mountOnEnter unmountOnExit>
      {state => (
        <div className={`Modal ${classStyleObject[state] || null}`}>
          <h1>A Modal</h1>
          <button type="button" className="Button" onClick={props.closed}>
            Dismiss
          </button>
        </div>
      )}
    </Transition>
  );
};

export default modal;
