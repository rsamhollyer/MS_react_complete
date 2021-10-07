import React from 'react';
import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

export default function QuoteDetail() {
  const params = useParams();
  return (
    <div>
      <h2>Quote Detail</h2>
      <p>{params.quoteId}</p>
      <Route
        exact
        path={`/quotes/${params.quoteId}/comments`}
        component={Comments}
      />
    </div>
  );
}
