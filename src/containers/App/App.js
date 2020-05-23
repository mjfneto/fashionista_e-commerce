import mockData from '../../mockData/mockData';
import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import Header from '../../containers/Header/Header';
import Catalog from '../../containers/Catalog/Catalog';
import Product from '../ProductPage/ProductPage';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockData);
  }, []);

  return (
    <div data-testid="app">
      <Header />
      <Router>
        <Catalog path="/" products={products} />
        <Product path="produto/:name" />
      </Router>
    </div>
  );
};

export default App;
