const functions = require('firebase-functions');
const request = require('request-promise-native');

const battlerite_api_key = functions.config().battlerite.api_key;
const API_ROOT = 'https://api.dc01.gamelockerapp.com/shards/global';
const headers = {
  'Accept': 'application/vnd.api+json',
  'Authorization': `Bearer ${battlerite_api_key}`
};

module.exports = function (endpoint, options) {
  const defaults = {
    uri: `${API_ROOT}/${endpoint}`,
    method: 'GET',
    followRedirect: true,
    headers,
    json: true,
    resolveWithFullResponse: true
  };
  const requestOptions = Object.assign({}, defaults, options);
  return request(requestOptions)
    .then((response) => {
      if (response.statusCode !== 200) {
        return Promise.reject(response);
      }
      return Promise.resolve(response.body);
    })
}
