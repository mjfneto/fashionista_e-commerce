import { combineReducers } from 'redux';
import navSliderReducer from './nav-slider-reducer';
import productsReducer from './products-reducer';
import shoppingBagReducer from './shopping-bag-reducer';

export default combineReducers({
  productsReducer,
  navSliderReducer,
  shoppingBagReducer,
});
