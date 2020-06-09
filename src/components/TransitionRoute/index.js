import React, { useEffect } from 'react';

const RouteTransition = ({ component: Component, ...rest }) => {
  const { location } = rest;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Component {...rest} />
    </>
  );
};

export default RouteTransition;
