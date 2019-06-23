import createHistory from 'history/createBrowserHistory';
import PouchDB from 'pouchdb';

const { DB_NAME } = process.env;

const store = new PouchDB(DB_NAME || 'kittens');
PouchDB.debug.disable();

const configureStore = () => {
  store.history = createHistory();
  return store;
};

export default configureStore;
