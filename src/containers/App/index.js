import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { setProducts, clearQuery } from '../../actions';

const AppContainer = (props) => {
  return <App {...props} />;
};

const mapStateToProps = ({ navSliderReducer }) => {
  return {
    slider: navSliderReducer.slider,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts(data) {
      dispatch(setProducts(data));
    },
    clearQuery() {
      dispatch(clearQuery());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
