import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';
// import AddQuote from './pages/AddQuote';
// import AllQuotes from './pages/AllQuotes';
// import NotFound from './pages/NotFound';
// import QuoteDetail from './pages/QuoteDetail';

/**
 * Code Splitting
 */

const AddQuote = React.lazy(() => import('./pages/AddQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/quotes" />} />
          <Route exact path="/quotes" component={AllQuotes} />
          <Route path="/quotes/:quoteId" component={QuoteDetail} />
          <Route path="/new-quote" component={AddQuote} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
