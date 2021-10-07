import React from 'react';
import { useParams } from 'react-router-dom';

export default function QuoteDetail() {
  const params = useParams();
  return (
    <div>
      <h2>Quote Detail</h2>
      <p>{params.quoteId}</p>
    </div>
  );
}
