import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { fetchProducts, clearQuery } from '../../store/actions';

const AppContainer = (props) => {
  return <App {...props} />;
};

const mapStateToProps = ({ navSliderReducer, errorReducer }) => {
  return {
    slider: navSliderReducer.slider,
    error: errorReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts() {
      dispatch(fetchProducts());
    },
    clearQuery() {
      dispatch(clearQuery());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
