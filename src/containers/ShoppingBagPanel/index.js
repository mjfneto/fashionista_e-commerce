import React from 'react';
import { connect } from 'react-redux';
import ShoppingBagPanel from './ShoppingBagPanel';
import { closeSlider } from '../../actions';

const ShoppingBagPanelContainer = (props) => {
  return <ShoppingBagPanel {...props} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeSlider() {
      dispatch(closeSlider());
    },
  };
};

export default connect(null, mapDispatchToProps)(ShoppingBagPanelContainer);
