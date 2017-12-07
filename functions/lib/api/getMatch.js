const { apiGet } = require('./fetch');

exports.getMatch = function (matchId) {
  return apiGet(`matches/${matchId}`);
}
