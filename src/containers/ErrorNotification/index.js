import React from 'react';
import { connect } from 'react-redux';
import ErrorNotification from './ErrorNotification';

import { closeError } from '../../actions';

import './ErrorNotification.css';

const ErrorNotificationContainer = (props) => {
  return <ErrorNotification {...props} />;
};

const mapStateToProps = ({ errorReducer }) => {
  return {
    error: errorReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeError() {
      dispatch(closeError());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorNotificationContainer);
