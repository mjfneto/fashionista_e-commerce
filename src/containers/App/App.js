import React, { useEffect } from 'react';
import { Router } from '@reach/router';

import Header from '../../containers/Header';
import Catalog from '../../containers/Catalog';
import ProductPage from '../ProductPage';
import Overlay from '../../components/Overlay/Overlay';
import NavigationSlider from '../NavigationSlider/NavigationSlider';
import SearchPanel from '../SearchPanel';
import ShoppingBagPanel from '../ShoppingBagPanel';

import './App.css';

const App = ({ slider, fetchProducts, setProducts, clearQuery }) => {
  useEffect(() => {
    fetchProducts();

    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [fetchProducts, setProducts]);

  useEffect(() => {
    if (!slider) {
      clearQuery();
    }
  }, [slider, clearQuery]);

  return (
    <div data-testid="app">
      <Header />
      <Router>
        <Catalog path="/" />
        <ProductPage path="produto/:name" />
      </Router>
      {slider && (
        <>
          <Overlay />
          <NavigationSlider>
            {slider == 'search' && <SearchPanel />}
            {slider == 'shoppingBag' && <ShoppingBagPanel />}
          </NavigationSlider>
        </>
      )}
    </div>
  );
};

export default App;
