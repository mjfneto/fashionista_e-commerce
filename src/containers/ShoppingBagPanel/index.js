import React from 'react';
import { connect } from 'react-redux';
import ShoppingBagPanel from './ShoppingBagPanel';
import {
  closeSlider,
  addItem,
  removeItem,
  removeAllItems,
} from '../../store/actions';

const ShoppingBagPanelContainer = (props) => {
  return <ShoppingBagPanel {...props} />;
};

const mapStateToProps = ({ shoppingBagReducer }) => {
  return {
    shoppingBag: shoppingBagReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeSlider() {
      dispatch(closeSlider());
    },
    addItem(item) {
      dispatch(addItem(item));
    },
    removeItem(item) {
      dispatch(removeItem(item));
    },
    removeAllItems(item) {
      dispatch(removeAllItems(item));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingBagPanelContainer);
