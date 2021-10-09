import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/useHttp';
import { addQuote } from '../lib/api';

export default function AddQuote() {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
  };

  return (
    <div>
      <h2>New Quote</h2>
      <QuoteForm
        isLoading={status === 'pending'}
        onAddQuote={addQuoteHandler}
      />
    </div>
  );
}
