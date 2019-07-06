import { createBrowserHistory } from 'history';
import PouchDB from 'pouchdb';
import API from '../api';

const { REACT_APP_DB_NAME } = process.env;
const store = new PouchDB(REACT_APP_DB_NAME);

PouchDB.debug.disable();

const configureStore = () => {
  store.history = createBrowserHistory();
  store.API = API;
  return store;
};

export default configureStore;
