import React from 'react';
import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { addItem } from '../../actions';

const ProductPageContainer = (props) => {
  return <ProductPage {...props} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem(item) {
      dispatch(addItem(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductPageContainer);
