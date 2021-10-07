import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const ALL_QUOTES = [
  { id: 'q1', author: 'Sam', text: 'Lorem' },
  { id: 'q2', author: 'Aspem', text: 'Quorum' },
  { id: 'q3', author: 'Vivi', text: 'Snorum' },
];

export default function AllQuotes() {
  return (
    <div>
      <h2>All Quotes</h2>
      <QuoteList quotes={ALL_QUOTES} />
    </div>
  );
}
