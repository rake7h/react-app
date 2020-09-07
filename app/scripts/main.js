import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store/index';

import '../styles/main.scss';

function renderApp() {
  const App = require('./components/app').default;
  ReactDOM.render(
    (
      <Provider store={store}>
        <App />
      </Provider>
    ), document.getElementById('app-root'),
  );
}

renderApp();

if (module.hot) {
  module.hot.accept('./components/app', renderApp);
}
