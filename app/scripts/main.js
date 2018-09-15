import React, { Component } from "react"
import ReactDOM from 'react-dom'

import store from './store/index'
import { Provider } from 'react-redux'

import '../styles/main.scss'

function renderApp() {
  const App = require('./components/app').default
  ReactDOM.render(
    (
      <Provider store={store}>
        <App />
      </Provider>
    ), document.getElementById('app-root')
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./components/app', renderApp);
}
