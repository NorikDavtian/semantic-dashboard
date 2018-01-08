const inbox = require('./inbox.json');
const notFound = require('./404.json');
const email1 = require('./email/52af48b5d55148fa0c19964a.json');
const email2 = require('./email/52af48b6d55148fa0c199748.json');

const emails = {
  email1,
  email2
};

const api = { inbox, emails, notFound };
module.exports = api;
