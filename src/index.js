import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
// import AppContainer from './AppContainer';
import { store } from './config';

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
