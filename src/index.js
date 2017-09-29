import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import 'semantic-ui-css/semantic.min.css';
import configureStore from './store/configureStore';
import App from './containers/App';
import './index.css';

const store = configureStore();
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={store.history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
