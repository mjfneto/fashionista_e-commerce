import mockData from '../../mockData/mockData';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
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
