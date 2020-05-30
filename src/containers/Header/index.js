import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { openSlider } from '../../actions';

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = ({ shoppingBagReducer }) => {
  return {
    bagQuantity: shoppingBagReducer.bagQuantity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openSlider(slider) {
      dispatch(openSlider(slider));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
