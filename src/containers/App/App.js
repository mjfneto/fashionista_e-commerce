import mockData from '../../mockData/mockData';
import escapeRegExp from 'escape-string-regexp';
import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import Header from '../../containers/Header/Header';
import Catalog from '../../containers/Catalog/Catalog';
import ProductPage from '../ProductPage/ProductPage';
import Overlay from '../../components/Overlay/Overlay';
import NavigationSlider from '../NavigationSlider/NavigationSlider';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [showingProducts, setShowingProducts] = useState([]);
  const [navSlider, setNavSlider] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    setProducts(mockData);
  }, []);

  useEffect(() => {
    if (!navSlider) {
      setShowingProducts([]);
    }
  }, [navSlider]);

  const toggleNavSlider = (slider) => {
    setNavSlider(slider ? slider : '');
  };

  const handleSearchInput = (query) => {
    setQuery(query);
    setShowingProducts(query ? filterContacts([...products]) : []);
  };

  const filterContacts = (showingProducts) => {
    const match = new RegExp(escapeRegExp(query), 'i');

    return showingProducts.filter(({ name }) => match.test(name));
  };

  return (
    <div data-testid="app">
      <Header toggleNavSlider={toggleNavSlider} />
      <Router>
        <Catalog path="/" products={products} />
        <ProductPage path="produto/:name" />
      </Router>
      {navSlider && (
        <>
          <Overlay />
          <NavigationSlider>
            {navSlider == 'search' && (
              <SearchPanel
                results={showingProducts}
                toggleNavSlider={toggleNavSlider}
                onSearchInput={handleSearchInput}
              />
            )}
          </NavigationSlider>
        </>
      )}
    </div>
  );
};

export default App;
