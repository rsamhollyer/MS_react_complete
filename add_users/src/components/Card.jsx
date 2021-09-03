import React from 'react';
import styled from 'styled-components';

export default function Card({ children }) {
  return <CardStyles>{children}</CardStyles>;
}

const CardStyles = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;

    :focus {
      outline: none;
      border-color: #4f005f;
    }
  }
`;
