import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/App';
import store from './services/store';
import { Provider } from 'react-redux';
ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById('root')
);