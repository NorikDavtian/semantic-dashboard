import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from './devTools';
// @todo import api middleware

const configureStore = (preloadedState) => {
  const history = createHistory();
  const middleware = [routerMiddleware(history), thunk, createLogger()];

  const storeEnhancer = compose(
    applyMiddleware(...middleware),
    DevTools.instrument()
  );

  // will need preloadedState later for i18n
  const store = createStore(rootReducer, preloadedState, storeEnhancer);
  store.history = history;

  console.log('Initial state:');
  console.log(store.getState());

  // @todo not tested yet, boilerplate code
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = rootReducer; // eslint-disable-line global-require
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
};


export default configureStore;
