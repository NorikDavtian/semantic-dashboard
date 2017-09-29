if (process.env.NODE_ENV === 'production') {
  module.exports = require('./App.prod'); // eslint-disable-line global-require
} else {
  module.exports = require('./App.dev'); // eslint-disable-line global-require
}
