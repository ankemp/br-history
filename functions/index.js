const functions = require('firebase-functions');
const admin = require('firebase-admin');
const _ = require('lodash');
const fetch = require('node-fetch');
admin.initializeApp(functions.config().firebase);

const battlerite_api_key = functions.config().battlerite.api_key;

const headers = {
  'Accept': 'application/vnd.api+json',
  'Authorization': `Bearer ${battlerite_api_key}`
};

exports.getRecentMatches = functions.https.onRequest((req, resp) => {
  const sdb = admin.firestore();
  const matchCol = sdb.collection('match');
  fetch('https://api.dc01.gamelockerapp.com/shards/global/matches?filter[playerIds]=805576310947717120,934855283782594560', { headers })
    .then(res => res.json())
    .then(res => res.errors ? Promise.reject(res.errors) : res)
    .then(res => {
      // console.log(_.sample(res.data));
      const includes = _(res.included);
      res.data = _.map(res.data, match => {
        match.relationships = _.mapValues(match.relationships, rel => {
          return _.map(rel.data, data => {
            if (data.type === 'roster') {
              const included = includes.find({ 'type': data.type, 'id': data.id });
              included.relationships = _.mapValues(included.relationships, iRel =>
                _.map(iRel.data, iData =>
                  includes.find({ 'type': iData.type, 'id': iData.id })
                )
              )
              return included;
            }
            return includes.find({ 'type': data.type, 'id': data.id });
          });
        });
        return match;
      });
      return res;
    })
    .then(res => {
      _.forEach(res.data, match => {
        matchCol.doc(match.id).set(match);
      });
      // _.forEach(res.included, i => {
      //   sdb.collection(i.type).doc(i.id).set(_.omit(i, ['type', 'id']));
      // })
      resp.status(200).send(`Saved ${res.data.length} matches`);
    })
    .catch(err => {
      console.log('error: ', err)
      resp.status(500).send(err);
    });
});
