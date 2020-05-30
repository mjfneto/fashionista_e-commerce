import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import App from './containers/App';
import './index.css';

const store = createStore(rootReducer);

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
