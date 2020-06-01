import {
  fetchProductsBegin,
  fetchProductsSuccess,
  openError,
  closeError,
} from '../../store/actions';

export const fetchProductsThunk = (dispatch, getState) => {
  const { errorReducer } = getState();
  if (errorReducer.error) {
    dispatch(closeError());
  }

  dispatch(fetchProductsBegin());

  return fetch(process.env.API_END_POINT)
    .then(handleErrors)
    .then((res) => res.json())
    .then((products) => {
      dispatch(fetchProductsSuccess(products));
    })
    .catch((error) => dispatch(openError(error)));

  // **************************

  function handleErrors(response) {
    if (!response.ok) {
      const { status, statusText } = response;
      throw Error(`${status}: ${statusText}`);
    }
    return response;
  }
};
