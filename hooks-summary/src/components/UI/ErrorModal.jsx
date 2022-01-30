/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import './ErrorModal.css';

const ErrorModal = React.memo(({ onClose, children }) => (
  <>
    <div className="backdrop" onClick={onClose} />
    <div className="error-modal">
      <h2>An Error Occurred!</h2>
      <p>{children}</p>
      <div className="error-modal__actions">
        <button type="button" onClick={onClose}>
          Okay
        </button>
      </div>
    </div>
  </>
));

export default ErrorModal;

ErrorModal.displayName = 'ErrorModal';
