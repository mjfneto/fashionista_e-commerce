import React from 'react';

const ErrorNotification = ({ error }) => {
  return (
    <div className="error-notification container">
      <h2>Erro</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorNotification;
