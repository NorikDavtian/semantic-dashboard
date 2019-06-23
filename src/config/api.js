const baseUrl = process.env.API_URL;

if (!baseUrl) {
  throw new Error(
    'process.env.API_URL is "undefined", try `npm run postinstall`'
  );
}

exports.baseUrl = baseUrl;
