import React, { useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/useHttp';
import { getSingleQuote } from '../lib/api';
import NotFound from './NotFound';

export default function QuoteDetail() {
  const match = useRouteMatch();

  const { quoteId } = useParams();

  const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!data.text) {
    return <Route component={NotFound} />;
  }

  return (
    <div>
      <h2>Quote Detail</h2>
      <HighlightedQuote text={data.text} author={data.author} />
      <Route
        exact
        path={match.path}
        render={() => (
          <div className="centered">
            <Link className="btn" to={`${match.url}/comments`}>
              Load Comments
            </Link>
          </div>
        )}
      />
      <Route exact path={`${match.path}/comments`} component={Comments} />
    </div>
  );
}
