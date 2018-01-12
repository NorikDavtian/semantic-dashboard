const micro = require('micro');

const { send } = micro;
const cors = require('micro-cors')();
const { router, get } = require('microrouter');
const api = require('./api/');

const inbox = async (req, res) =>
  send(res, 200, await api.inbox);

const email = async (req, res) =>
  send(res, 200, await api.emails.email1);

const notFound = async (req, res) =>
  send(res, 404, await api.notFound);

module.exports = cors(router(
  get('/api/inbox', inbox),
  get('/api/email/:id', email),
  get('/*', notFound)
));

