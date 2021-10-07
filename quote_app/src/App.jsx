import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AddQuote from './pages/AddQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/quotes" />} />
      <Route exact path="/quotes" component={AllQuotes} />
      <Route path="/quotes/:quoteId" component={QuoteDetail} />
      <Route path="/new-quote" component={AddQuote} />
    </Switch>
  );
}

export default App;
