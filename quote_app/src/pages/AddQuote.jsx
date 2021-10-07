import React from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

export default function AddQuote() {
  const history = useHistory();
  const addQuoteHandler = quoteData => {
    history.push('/quotes');
  };
  return (
    <div>
      <h2>New Quote</h2>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
}
