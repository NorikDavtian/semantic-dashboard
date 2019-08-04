import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import configureStore from './store/configureStore';
import App from './containers/App';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
