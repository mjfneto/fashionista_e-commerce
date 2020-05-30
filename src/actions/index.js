import {
  FETCH_PRODUCTS_SUCCESS,
  QUERY_PRODUCTS,
  CLEAR_QUERY,
  OPEN_SLIDER,
  CLOSE_SLIDER,
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ALL_ITEMS,
} from './actionTypes';

export const setProducts = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

export const queryProducts = (query) => ({
  type: QUERY_PRODUCTS,
  query,
});

export const clearQuery = () => ({
  type: CLEAR_QUERY,
});

export const openSlider = (slider) => ({
  type: OPEN_SLIDER,
  slider,
});

export const closeSlider = () => ({
  type: CLOSE_SLIDER,
});

export const addItem = (item) => ({ type: ADD_ITEM, item });
export const removeItem = (item) => ({ type: REMOVE_ITEM, item });
export const removeAllItems = (item) => ({ type: REMOVE_ALL_ITEMS, item });
