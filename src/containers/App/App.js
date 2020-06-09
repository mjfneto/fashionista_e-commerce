import React, { useEffect } from 'react';
import { Router } from '@reach/router';

import ErrorNotification from '../ErrorNotification';
import Header from '../../containers/Header';
import Catalog from '../../containers/Catalog';
import ProductPage from '../ProductPage';

import Overlay from '../../components/Overlay/Overlay';
import NavigationSlider from '../NavigationSlider/NavigationSlider';

import SearchPanel from '../SearchPanel';
import ShoppingBagPanel from '../ShoppingBagPanel';

import './App.css';
import ScrollToTop from '../../components/ScrollToTop';

const App = ({ slider, fetchProducts, clearQuery, error }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (!slider) {
      clearQuery();
    }
  }, [slider, clearQuery]);

  return (
    <div data-testid="app">
      <Header />
      {error && <ErrorNotification />}
      {!error && (
        <Router>
          <ScrollToTop path="/">
            <Catalog path="/" />
            <ProductPage path="produto/:name" />
          </ScrollToTop>
        </Router>
      )}
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
