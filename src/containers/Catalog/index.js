import React from 'react';
import { connect } from 'react-redux';
import Catalog from './Catalog';

const CatalogContainer = (props) => {
  return <Catalog {...props} />;
};

const mapStateToProps = ({ productsReducer }) => {
  return {
    products: productsReducer.products,
  };
};

export default connect(mapStateToProps)(CatalogContainer);
