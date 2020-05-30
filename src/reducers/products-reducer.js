import escapeRegExp from 'escape-string-regexp';
import {
  FETCH_PRODUCTS_SUCCESS,
  QUERY_PRODUCTS,
  CLEAR_QUERY,
} from '../actions/actionTypes';

const initialState = {
  products: [],
  query: '',
  showingProducts: [],
};

export default function productsReducer(state = initialState, action) {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload,
    };
  }

  if (action.type === QUERY_PRODUCTS) {
    return { ...state, showingProducts: filterContacts(action.query) };
  }

  if (action.type === CLEAR_QUERY) {
    return { ...state, query: '', showingProducts: [] };
  }

  return state;

  //   *****************************

  function filterContacts(query) {
    const match = new RegExp(escapeRegExp(query), 'i');

    return state.products.filter(({ name }) => match.test(name));
  }
}
