import { createBrowserHistory } from 'history';
import PouchDB from 'pouchdb';
import pouchdbDebug from 'pouchdb-debug';
import API from '../api';

window.PouchDB = PouchDB;
PouchDB.plugin(pouchdbDebug);

const { REACT_APP_DB_NAME } = process.env;
// @docs https://pouchdb.com/guides/databases.html
const store = new PouchDB(REACT_APP_DB_NAME);

PouchDB.debug.enable('*');

const configureStore = () => {
  store.history = createBrowserHistory();
  store.API = API;

  store.info().then((info) => {
    console.log(`${REACT_APP_DB_NAME} Database initialized`);
    console.log(info);
  });

  return store;
};

export default configureStore;
