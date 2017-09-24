import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from '../src/store/configureStore';

const div = document.createElement('div');
const render = (c, el = div, s = configureStore()) => ReactDOM.render(
  <Provider store={s}>
    <ConnectedRouter history={s.history}>
      {c}
    </ConnectedRouter>
  </Provider>,
  el
) || {};

exports.div = div;
exports.render = render;

