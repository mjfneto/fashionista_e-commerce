import mockData from '../../mockData/mockData';
import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import Header from '../../containers/Header/Header';
import Catalog from '../../containers/Catalog/Catalog';
import Product from '../ProductPage/ProductPage';
import Overlay from '../../components/Overlay/Overlay';
import NavigationSlider from '../NavigationSlider/NavigationSlider';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [navSlider, setNavSlider] = useState('');

  useEffect(() => {
    setProducts(mockData);
  }, []);

  const toggleNavSlider = (slider) => {
    setNavSlider(slider ? slider : '');
  };

  return (
    <div data-testid="app">
      <Header toggleNavSlider={toggleNavSlider} />
      <Router>
        <Catalog path="/" products={products} />
        <Product path="produto/:name" />
      </Router>
      {navSlider && (
        <>
          <Overlay />
          <NavigationSlider>
            {navSlider == 'search' && (
              <SearchPanel
                toggleNavSlider={toggleNavSlider}
              />
            )}
          </NavigationSlider>
        </>
      )}
    </div>
  );
};

export default App;
