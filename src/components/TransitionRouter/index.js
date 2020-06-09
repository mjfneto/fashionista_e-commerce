import React from 'react';

import { Location, Router } from '@reach/router';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './index.css';

const TransitionRouter = ({ children }) => {
  return (
    <Location>
      {({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={750} classNames="fade">
            <div>
              {' '}
              {/* This div receives the fade-* classNames*/}
              <Router location={location}>{children}</Router>
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  );
};

export default TransitionRouter;
