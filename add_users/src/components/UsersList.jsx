import React from 'react';
import Card from './Card';

export default function UsersList({ users }) {
  return (
    <Card>
      <ul>
        {users?.map(user => (
          <li key={Math.random()}>
            {user?.name} - {user?.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
}
