import { OPEN_ERROR, CLOSE_ERROR } from '../actions/actionTypes';

const initialState = {
  error: null,
};

export default function errorReducer(state = initialState, action) {
  if (action.type === OPEN_ERROR) {
    return {
      error: action.error,
    };
  }

  if (action.type === CLOSE_ERROR) {
    return {
      error: null,
    };
  }
  return state;
}
