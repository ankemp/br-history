const fetch = require('../fetch');
const { queryArray } = require('../utils');

module.exports = function (filters, count = 5) {
  let params = {};
  if (filters.playerIds) {
    params["filter[playerIds]"] = queryArray(filters.playerIds);
  }
  if (filters.playerNames) {
    params["filter[playerNames]"] = queryArray(filters.playerNames);
  }
  if (filters.teamNames) {
    params["filter[teamNames]"] = queryArray(filters.teamNames);
  }
  if (filters.gamemode) {
    params["filter[gamemode]"] = queryArray(filters.gamemode);
  }
  if (filters.fromDate) {
    params["filter[createdAt-start]"] =
      typeof filters.fromDate === "string"
        ? filters.fromDate
        : (filters.fromDate).toISOString();
  }

  if (filters.toDate) {
    params["filter[createdAt-end]"] =
      typeof filters.toDate === "string"
        ? filters.toDate
        : (filters.fromDate).toISOString();
  }
  const options = { qs: params };
  return fetch(`matches`, options);
}
