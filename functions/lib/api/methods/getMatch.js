const fetch = require('../fetch');

module.exports = function (matchId) {
  return fetch(`matches/${matchId}`);
}
