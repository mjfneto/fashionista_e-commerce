import mockData from '../../mockData/mockData';

import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';

import Header from '../../containers/Header';
import Catalog from '../../containers/Catalog';
import ProductPage from '../ProductPage/ProductPage';
import Overlay from '../../components/Overlay/Overlay';
import NavigationSlider from '../NavigationSlider/NavigationSlider';
import SearchPanel from '../SearchPanel';
import ShoppingBagPanel from '../ShoppingBagPanel';

import { numStringToNum, twoDigits } from '../../utils';
import './App.css';

const App = ({ slider, setProducts, clearQuery }) => {
  const [shoppingBag, setShoppingBag] = useState({
    items: [],
    bagQuantity: 0,
    subtotal: 0,
  });

  useEffect(() => {
    setProducts(mockData);
  }, [setProducts]);

  useEffect(() => {
    if (!slider) {
      clearQuery();
    }
  }, [slider, clearQuery]);

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
        const subtotal = twoDigits(newSubTotal);
        const bagQuantity = getBagQuantity(items);

        setShoppingBag({
          items,
          subtotal,
          bagQuantity,
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
        const subtotal = twoDigits(newSubTotal);
        const bagQuantity = getBagQuantity(items);

        setShoppingBag({
          items,
          subtotal,
          bagQuantity,
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
        const subtotal = twoDigits(newSubtotal);
        const bagQuantity = getBagQuantity(items);

        setShoppingBag({
          items,
          subtotal,
          bagQuantity,
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
        const subtotal = twoDigits(newSubTotal);
        const bagQuantity = getBagQuantity(items);

        setShoppingBag({
          items,
          subtotal,
          bagQuantity,
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
      const subtotal = twoDigits(newSubTotal);
      const bagQuantity = getBagQuantity(items);

      setShoppingBag({
        items,
        subtotal,
        bagQuantity,
      });
    }
  };

  return (
    <div data-testid="app">
      <Header bagQuantity={shoppingBag.bagQuantity} />
      <Router>
        <Catalog path="/" />
        <ProductPage
          path="produto/:name"
          onShoppingBagAction={handleShoppingBagAction}
        />
      </Router>
      {slider && (
        <>
          <Overlay />
          <NavigationSlider>
            {slider == 'search' && <SearchPanel />}
            {slider == 'shoppingBag' && (
              <ShoppingBagPanel
                shoppingBag={shoppingBag}
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
