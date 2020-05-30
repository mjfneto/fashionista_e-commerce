import {
  FETCH_PRODUCTS_SUCCESS,
  QUERY_PRODUCTS,
  CLEAR_QUERY,
  OPEN_SLIDER,
  CLOSE_SLIDER,
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
