import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import configureStore from './store/configureStore';
import App from './containers/App';
import './index.css';

const store = configureStore();
window.store = store;

ReactDOM.render(
  <Router>
    <App store={store} />
  </Router>,
  document.getElementById('root')
);
