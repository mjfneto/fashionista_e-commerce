import { OPEN_SLIDER, CLOSE_SLIDER } from '../actions/actionTypes';

const initialState = {
  slider: '',
};

export default function navSliderReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SLIDER:
      return {
        slider: action.slider,
      };
    case CLOSE_SLIDER:
      return {
        slider: '',
      };
    default:
      return state;
  }
}
