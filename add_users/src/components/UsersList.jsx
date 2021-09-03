import React from 'react';
import styled from 'styled-components';

export default function UsersList({ users }) {
  return (
    <ListStyles>
      <ul>
        {users?.map(user => (
          <li key={user.id}>
            <span>{user?.name}</span> - {user?.age} years old
          </li>
        ))}
      </ul>
    </ListStyles>
  );
}

const ListStyles = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  ul {
    list-style: none;
    padding: 1rem;
  }
  li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
  span {
    text-transform: capitalize;
  }
`;
