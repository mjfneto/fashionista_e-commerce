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

import { numStringToNum, twoDigits } from '../../utils';
import './App.css';

const App = () => {
  const [shoppingBag, setShoppingBag] = useState({
    items: [],
    bagQuantity: 0,
    subtotal: 0,
  });
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
    const currentItem = shoppingBag.items.find(({ name, sizeChoice }) => {
      return name === action.item.name && sizeChoice === action.item.sizeChoice;
    });

    const getBagQuantity = (items) =>
      items.reduce((total, { quantity }) => total + quantity, 0);

    if (action.type === 'ADD') {
      if (!currentItem) {
        const items = [...shoppingBag.items, { quantity: 1, ...action.item }];
        const newSubTotal = items.reduce(
          (total, { actual_price, quantity }) =>
            total + quantity * numStringToNum(actual_price),
          0
        );

        setShoppingBag({
          items,
          subtotal: twoDigits(newSubTotal),
          bagQuantity: getBagQuantity(items),
        });
        return;
      }

      if (currentItem) {
        const items = shoppingBag.items.map((item) => {
          if (
            item.name === action.item.name &&
            item.sizeChoice === action.item.sizeChoice
          )
            return { ...item, quantity: item.quantity + 1 };
          return item;
        });
        const newSubTotal =
          shoppingBag.subtotal + numStringToNum(action.item.actual_price);

        setShoppingBag({
          items,
          subtotal: twoDigits(newSubTotal),
          bagQuantity: getBagQuantity(items),
        });
      }
    }

    if (action.type === 'SUBTRACT') {
      if (currentItem.quantity === 1) {
        const items = shoppingBag.items.filter((item) => {
          return (
            item.name !== action.item.name ||
            item.sizeChoice !== action.item.sizeChoice
          );
        });
        const newSubtotal = items.reduce(
          (total, { actual_price, quantity }) =>
            total + quantity * numStringToNum(actual_price),
          0
        );

        setShoppingBag({
          items,
          subtotal: twoDigits(newSubtotal),
          bagQuantity: getBagQuantity(items),
        });
        return;
      }

      if (currentItem.quantity > 1) {
        const items = shoppingBag.items.map((item) => {
          if (
            item.name === action.item.name &&
            item.sizeChoice === action.item.sizeChoice
          )
            return { ...item, quantity: item.quantity - 1 };
          return item;
        });
        const newSubTotal =
          shoppingBag.subtotal - numStringToNum(action.item.actual_price);

        setShoppingBag({
          items,
          subtotal: twoDigits(newSubTotal),
          bagQuantity: getBagQuantity(items),
        });
      }
    }

    if (action.type === 'REMOVE') {
      const items = shoppingBag.items.filter(
        (item) =>
          item.name !== action.item.name ||
          item.sizeChoice !== action.item.sizeChoice
      );
      const newSubTotal = items.reduce(
        (total, { actual_price, quantity }) =>
          total + quantity * numStringToNum(actual_price),
        0
      );

      setShoppingBag({
        items,
        subtotal: twoDigits(newSubTotal),
        bagQuantity: getBagQuantity(items),
      });
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
