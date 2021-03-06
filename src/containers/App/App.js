import React, { useEffect } from 'react';

import ErrorNotification from '../ErrorNotification';
import Header from '../../containers/Header';

import TransitionRouter from '../../components/TransitionRouter';
import TransitionRoute from '../../components/TransitionRoute';
import Catalog from '../../containers/Catalog';
import ProductPage from '../ProductPage';

import Overlay from '../../components/Overlay/Overlay';
import NavigationSlider from '../NavigationSlider/NavigationSlider';

import SearchPanel from '../SearchPanel';
import ShoppingBagPanel from '../ShoppingBagPanel';

import './App.css';

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
        <TransitionRouter>
          <TransitionRoute path="/" component={Catalog} />
          <TransitionRoute path="produto/:name" component={ProductPage} />
        </TransitionRouter>
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
