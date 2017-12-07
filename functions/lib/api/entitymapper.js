const _ = require('lodash');
const { getChampionById } = require('./data/champions');
const { getMapById } = require('./data/maps');

function _mapIncluded(_included, { type, id }) {
  let include = _included.find(i => i.id === id);
  if (!_.isUndefined(include) && !_.isUndefined(include.attributes)) {
    include = _.assign(include, _flattenAttributes(include.attributes))
    include = _.omit(include, 'attributes');
  }
  if (!_.isUndefined(include) && !_.isUndefined(include.relationships)) {
    _.forEach(include.relationships, (relationship, key) => {
      if (!!relationship.data) {
        if (_.isArray(relationship.data)) {
          _.forEach(relationship.data, d => {
            (include[`${key}`] = include[`${key}`] || [])
              .push(_mapIncluded(_included, d));
          })
        } else {
          if (!_.isUndefined(relationship[`${key}`])) {
            (include[`${key}`] = include[`${key}`] || [])
              .push(_mapIncluded(_included, relationship[`${key}`].data));
          }
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
        obj.stats[key] = value;
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
  _.set(match, ['map'], getMapById(match.stats.mapID));
  if (data.relationships) {
    for (const [name, relData] of _.toPairs(data.relationships)) {
      if (_.isArray(relData.data)) {
        _.set(match, [`${name}`], _.map(relData.data, d => {
          return _mapIncluded(_included, d);
        }))
      } else {
        const key = `${relData.data.type}-${relData.data.id}`;
        _.set(match, [`${name}`], relData.data);
      }
    }
  }
  return match;
}

exports.mapMatch = function (response) {
  return _mapMatch(response);
}
