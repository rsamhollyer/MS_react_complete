import React from 'react';
import styled from 'styled-components';

export default function Button({ type, children, onClick }) {
  return (
    <ButtonStyles onClick={onClick} type={type || 'button'}>
      {children}
    </ButtonStyles>
  );
}

const ButtonStyles = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }
  &:focus {
    outline: none;
  }
`;
