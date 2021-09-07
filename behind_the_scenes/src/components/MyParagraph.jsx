import React from 'react';

export default function MyParagraph({ children }) {
  console.log('PARA RUNNING');
  return <p>{children}</p>;
}
