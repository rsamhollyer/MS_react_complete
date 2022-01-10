import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Nav/Navigation';
import FavoritesPage from './containers/Favorites';
import ProductsPage from './containers/Products';

const App = props => (
  <>
    <Navigation />
    <main>
      <Routes>
        <Route path="/" element={<ProductsPage />} exact="true" />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </main>
  </>
);

export default App;
