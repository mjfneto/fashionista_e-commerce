import { numStringToNum, twoDigits } from '../utils';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ALL_ITEMS,
} from '../actions/actionTypes';

const shoppingBagDefault = {
  items: [],
  subtotal: 0,
  bagQuantity: 0,
};

export default function shoppingBagReducer(
  shoppingBag = shoppingBagDefault,
  action
) {
  if (action.type === ADD_ITEM) {
    const currentItem = getCurrentItem(shoppingBag.items);

    if (!currentItem) {
      const items = [...shoppingBag.items, { quantity: 1, ...action.item }];
      const newSubTotal = items.reduce(
        (total, { actual_price, quantity }) =>
          total + quantity * numStringToNum(actual_price),
        0
      );
      const subtotal = twoDigits(newSubTotal);
      const bagQuantity = getBagQuantity(items);

      return {
        items,
        subtotal,
        bagQuantity,
      };
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

      return {
        items,
        subtotal,
        bagQuantity,
      };
    }
  }

  if (action.type === REMOVE_ITEM) {
    const currentItem = getCurrentItem(shoppingBag.items);

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

      return {
        items,
        subtotal,
        bagQuantity,
      };
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

      return {
        items,
        subtotal,
        bagQuantity,
      };
    }
  }

  if (action.type === REMOVE_ALL_ITEMS) {
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

    return {
      items,
      subtotal,
      bagQuantity,
    };
  }

  return shoppingBag;

  // ****************************

  function getCurrentItem(items) {
    return items.find(({ name, sizeChoice }) => {
      return name === action.item.name && sizeChoice === action.item.sizeChoice;
    });
  }

  function getBagQuantity(items) {
    return items.reduce((total, { quantity }) => total + quantity, 0);
  }
}
