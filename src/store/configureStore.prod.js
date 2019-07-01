import { createBrowserHistory } from 'history';
import PouchDB from 'pouchdb';

// const { DB_NAME } = process.env;
const DB_NAME = 'mydb';
const db = new PouchDB(DB_NAME);

PouchDB.debug.disable();

const configureStore = () => {
  db.history = createBrowserHistory();
  db.info().then((info) => {
    console.log(`${DB_NAME} Database initialized`);
    console.log(info);
  });
  return db;
};

export default configureStore;
