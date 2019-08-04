const baseUrl = process.env.REACT_APP_API_URL;

if (!baseUrl) {
  throw new Error(
    'process.env.API_URL is "undefined", try `npm run postinstall`'
  );
}

exports.baseUrl = baseUrl;
