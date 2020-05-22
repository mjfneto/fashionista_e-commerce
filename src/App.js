import mockData from './mockData';
import React, { useState, useEffect } from 'react';
import Header from './containers/Header/Header';
import Catalog from './containers/Catalog/Catalog';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockData);
  }, []);

  return (
    <div data-testid="app">
      <Header />
      <Catalog products={products} />
    </div>
  );
};

export default App;
