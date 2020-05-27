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
import ShoppingBagPanel from '../ShoppingBagPanel/ShoppingBagPanel';

import './App.css';

const App = () => {
  const [shoppingBag, setShoppingBag] = useState([]);
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

  const handleShoppingBagAction = (action) => {
    if (action.type === 'ADD') {
      const currentItem = shoppingBag.find(({ name, sizeChoice }) => {
        return (
          name === action.item.name && sizeChoice === action.item.sizeChoice
        );
      });

      if (!currentItem) {
        setShoppingBag([...shoppingBag, { quantity: 1, ...action.item }]);
        return;
      }

      setShoppingBag(
        shoppingBag.map((item) => {
          if (
            item.name === action.item.name &&
            item.sizeChoice === action.item.sizeChoice
          )
            return { ...item, quantity: item.quantity + 1 };
          return item;
        })
      );
    }

    if (action.type === 'SUBTRACT') {
      const currentItem = shoppingBag.find(({ name, sizeChoice }) => {
        return (
          name === action.item.name && sizeChoice === action.item.sizeChoice
        );
      });

      if (currentItem.quantity === 1) {
        setShoppingBag(
          shoppingBag.filter((item) => {
            return (
              item.name !== action.item.name ||
              item.sizeChoice !== action.item.sizeChoice
            );
          })
        );
        return;
      }

      setShoppingBag(
        shoppingBag.map((item) => {
          if (
            item.name === action.item.name &&
            item.sizeChoice === action.item.sizeChoice
          )
            return { ...item, quantity: item.quantity - 1 };
          return item;
        })
      );
    }

    if (action.type === 'REMOVE') {
      setShoppingBag(
        shoppingBag.filter(
          (item) =>
            item.name !== action.item.name ||
            item.sizeChoice !== action.item.sizeChoice
        )
      );
    }
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
        <ProductPage
          path="produto/:name"
          onShoppingBagAction={handleShoppingBagAction}
        />
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
            {navSlider == 'shoppingBag' && (
              <ShoppingBagPanel
                shoppingBag={shoppingBag}
                toggleNavSlider={toggleNavSlider}
                onShoppingBagAction={handleShoppingBagAction}
              />
            )}
          </NavigationSlider>
        </>
      )}
    </div>
  );
};

export default App;
