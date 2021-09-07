import React from 'react';

export default function DemoOutput({ show }) {
  return (
    <div>
      <p>{show ? 'This is new' : ''}</p>
    </div>
  );
}
