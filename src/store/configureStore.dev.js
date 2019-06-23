import { createBrowserHistory } from 'history';
import PouchDB from 'pouchdb';
import pouchdbDebug from 'pouchdb-debug';

window.PouchDB = PouchDB;
console.log('putch', PouchDB);
console.log(process.env);
PouchDB.plugin(pouchdbDebug);

const { DB_NAME } = process.env;
// @docs https://pouchdb.com/guides/databases.html
const db = new PouchDB('kittens');
console.log(db);


console.log('DB_NAME');
console.log(DB_NAME);
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
