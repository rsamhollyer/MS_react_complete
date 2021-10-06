import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const params = useParams({});
  return (
    <section>
      <h2>Product Detail</h2>
      <p>{params.product}</p>
    </section>
  );
}
