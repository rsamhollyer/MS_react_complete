import React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <section>
      <h1>The Products</h1>
      <ul>
        <li>
          <Link to="/products/product1">Book</Link>
        </li>
        <li>
          <Link to="/products/product2">Computer</Link>
        </li>
        <li>
          <Link to="/products/product3">Television</Link>
        </li>
      </ul>
    </section>
  );
}
