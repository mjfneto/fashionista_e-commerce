import {
  OPEN_SEARCH_SLIDER,
  OPEN_SHOPPING_BAG_SLIDER,
  CLOSE_SLIDER,
} from '../actions/actionTypes';

const initialState = {
  slider: '',
};

export default function navSliderReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SEARCH_SLIDER:
      return {
        slider: 'search',
      };
    case OPEN_SHOPPING_BAG_SLIDER:
      return {
        slider: 'shoppingBag',
      };
    case CLOSE_SLIDER:
      return {
        slider: '',
      };
    default:
      return state;
  }
}
