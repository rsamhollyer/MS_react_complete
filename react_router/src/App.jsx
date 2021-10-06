import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

/*
  Note for Snowpack : Make sure to alter the config file at the `routes` section. Need to uncomment the line.
*/

function App() {
  return (
    <div>
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
