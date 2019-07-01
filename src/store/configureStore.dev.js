import { createBrowserHistory } from 'history';
import PouchDB from 'pouchdb';
import pouchdbDebug from 'pouchdb-debug';

window.PouchDB = PouchDB;
PouchDB.plugin(pouchdbDebug);

// const { DB_NAME } = process.env;
const DB_NAME = 'mydb';
// @docs https://pouchdb.com/guides/databases.html
const db = new PouchDB(DB_NAME);
console.log('Booted mydb', db);

PouchDB.debug.enable('*');

const configureStore = () => {
  db.history = createBrowserHistory();

  db.info().then((info) => {
    console.log(`${DB_NAME} Database initialized`);
    console.log(info);
  });

  return db;
};

export default configureStore;
