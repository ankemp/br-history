const _ = require('lodash');
const { getChampionById } = require('./data/champions');
const { getMapById } = require('./data/maps');

function _mapPlayerMatches({ data, included }) {
  const _included = _(included);
  return _.map(data, match => {
    const rosters = match.relationships.rosters.data;
    let players = _.map(rosters, r =>
      _mapIncluded(_included, r)
        .participants
        .map(p => p.player.id)
    );
    players = _.flatten(players);
    return { matchId: match.id, players };
  });
}

function _mapIncluded(_included, { type, id }) {
  let include = _included.find(i => i.id === id);
  if (!_.isUndefined(include) && !_.isUndefined(include.attributes)) {
    include = _.assign(include, _flattenAttributes(include.attributes))
    include = _.omit(include, 'attributes');
  }
  if (!_.isUndefined(include) && !_.isUndefined(include.relationships) && !!_.keys(include.relationships).length) {
    _.forEach(include.relationships, (relationship, key) => {
      if (!!relationship.data) {
        if (_.isArray(relationship.data) && !!relationship.data.length) {
          include[`${key}`] = _.map(relationship.data, d => {
            return _mapIncluded(_included, d);
          })
        } else {
          _.set(include, [`${key}`], _mapIncluded(_included, relationship.data));
        }
      }
    })
    include = _.omit(include, 'relationships');
  }
  return include;
}

function _flattenAttributes(attributes) {
  return _.transform(attributes, (obj, value, key) => {
    switch (key) {
      case 'createdAt':
        obj[key] = new Date(value);
        break;

      case 'titleId':
        //  Die.
        break;

      case 'actor':
        obj['champion'] = getChampionById(value);
        break;

      default:
        obj[key] = value;
        break;
    }
  }, {});
}

function _mapMatch({ data, included }) {
  const _included = _(included);
  const match = _flattenAttributes(data.attributes);
  _.set(match, ['id'], data.id);
  _.set(match, ['map'], getMapById(match.stats.mapID));
  if (data.relationships) {
    for (const [name, relData] of _.toPairs(data.relationships)) {
      if (_.isArray(relData.data)) {
        _.set(match, [`${name}`], _.map(relData.data, d => _mapIncluded(_included, d)))
      } else {
        _.set(match, [`${name}`], relData.data);
      }
    }
  }
  return JSON.parse(JSON.stringify(match));
}

function _mapMatches({ data, included }) {
  return _.map(data, d => {
    return _mapMatch({ data: d, included })
  })
}

module.exports = {
  mapMatch: _mapMatch,
  mapMatches: _mapMatches,
  mapPlayerMatches: _mapPlayerMatches
}
