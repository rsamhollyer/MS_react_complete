import React from 'react';
import './Modal.css';

const modal = props => {
  const classStyleObject = {
    entering: 'ModalOpen',
    exiting: 'ModalClosed',
  };

  return (
    <div className={`Modal ${classStyleObject[props.show] || null}`}>
      <h1>A Modal</h1>
      <button type="button" className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
