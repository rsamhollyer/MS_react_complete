import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

/*
  Note for Snowpack : Make sure to alter the config file at the `routes` section. Need to uncomment the line.
*/

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/welcome" />} />
          <Route path="/welcome" component={Welcome} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:product" component={ProductDetail} />
        </Switch>
      </main>
      <div />
    </div>
  );
}

export default App;
