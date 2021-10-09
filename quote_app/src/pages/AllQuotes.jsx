import React, { useEffect } from 'react';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/useHttp';
import { getAllQuotes } from '../lib/api';

// const ALL_QUOTES = [
//   { id: 'q1', author: 'Sam', text: 'Lorem' },
//   { id: 'q2', author: 'Aspem', text: 'Quorum' },
//   { id: 'q3', author: 'Vivi', text: 'Snorum' },
// ];

export default function AllQuotes() {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return (
    <div>
      <h2>All Quotes</h2>
      <QuoteList quotes={loadedQuotes} />
    </div>
  );
}
