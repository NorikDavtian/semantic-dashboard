import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
// @todo import api middleware

const configureStore = (preloadedState) => {
  const history = createHistory();
  const middleware = [routerMiddleware(history), thunk];

  const storeEnhancer = compose(
    applyMiddleware(...middleware)
  );

  const store = createStore(rootReducer, preloadedState, storeEnhancer);
  store.history = history;

  console.log('Initial state:');
  console.log(store.getState());

  return store;
};


export default configureStore;
