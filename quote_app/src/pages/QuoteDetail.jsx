import React from 'react';
import { Redirect, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const ALL_QUOTES = [
  { id: 'q1', author: 'Sam', text: 'Lorem' },
  { id: 'q2', author: 'Aspem', text: 'Quorum' },
  { id: 'q3', author: 'Vivi', text: 'Snorum' },
];

export default function QuoteDetail() {
  const params = useParams();
  const quoteDetail = ALL_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quoteDetail) {
    return <Redirect exact to="/quotes" />;
  }

  return (
    <div>
      <h2>Quote Detail</h2>
      <HighlightedQuote text={quoteDetail.text} author={quoteDetail.author} />
      <Route
        exact
        path={`/quotes/${params.quoteId}/comments`}
        component={Comments}
      />
    </div>
  );
}
