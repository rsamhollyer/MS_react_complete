import React from 'react';
import { Route } from 'react-router-dom';
import NewUser from '../components/NewUser';

export default function Welcome() {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user" component={NewUser} />
    </section>
  );
}
