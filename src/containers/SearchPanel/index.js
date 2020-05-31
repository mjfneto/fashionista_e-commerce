import React from 'react';
import { connect } from 'react-redux';
import SearchPanel from './SearchPanel';
import { queryProducts, clearQuery, closeSlider } from '../../actions';

const SearchPanelContainer = (props) => {
  return <SearchPanel {...props} />;
};

const mapStateToProps = ({ productsReducer }) => {
  return {
    showingProducts: productsReducer.showingProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    queryProducts(query) {
      dispatch(queryProducts(query));
    },
    clearQuery() {
      dispatch(clearQuery());
    },
    closeSlider() {
      dispatch(closeSlider());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanelContainer);
