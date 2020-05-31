import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import { openSearchSlider, openShoppingBagSlider } from '../../actions';

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = ({ shoppingBagReducer }) => {
  return {
    bagQuantity: shoppingBagReducer.bagQuantity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { openSearchSlider, openShoppingBagSlider },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
