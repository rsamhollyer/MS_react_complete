import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

export default function AddQuote() {
  const addQuoteHandler = quoteData => {
    console.log(quoteData);
  };
  return (
    <div>
      <h2>New Quote</h2>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
}
