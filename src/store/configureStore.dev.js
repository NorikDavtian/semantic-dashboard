import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';
import DevTools from '../containers/devTools';
import rootEpic from './epics';

const configureStore = (preloadedState) => {
  const history = createHistory();
  const middleware = [
    routerMiddleware(history),
    createEpicMiddleware(rootEpic),
    thunk,
    promise,
    createLogger()];

  const storeEnhancer = compose(
    applyMiddleware(...middleware),
    DevTools.instrument()
  );

  // will need preloadedState later for i18n
  const store = createStore(rootReducer, preloadedState, storeEnhancer);
  store.history = history;

  console.log('Initial state:');
  console.log(store.getState());

  return store;
};

export default configureStore;
