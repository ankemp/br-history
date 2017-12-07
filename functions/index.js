const functions = require('firebase-functions');
const admin = require('firebase-admin');
const _ = require('lodash');
const fetch = require('node-fetch');
const bjs = require('battlerite.js');
admin.initializeApp(functions.config().firebase);
const sdb = admin.firestore();

const battlerite_api_key = functions.config().battlerite.api_key;

const headers = {
  'Accept': 'application/vnd.api+json',
  'Authorization': `Bearer ${battlerite_api_key}`
};

exports.getMatch = functions.https.onRequest((req, resp) => {
  const client = new bjs.Client(battlerite_api_key);
  const dbRef = sdb.collection('match');

  const { matchId } = req.query;

  console.log('getMatch: ', matchId);

  if (!matchId) {
    resp.status(500).send('Missing Params');
    return;
  }

  client
    .getMatch(matchId)
    .then(match => JSON.parse(JSON.stringify(match)))
    .then(match => {
      dbRef.doc(match.id).set(match);
    })
    .then(() => {
      resp.status(200).send('Done');
    })
    .catch(err => {
      resp.status(500).send(err)
    });
});

exports.getRecentMatches = functions.https.onRequest((req, resp) => {
  const client = new bjs.Client(battlerite_api_key);
  const dbRef = sdb.collection('match');

  const { playerIds, toDate } = req.query;

  console.log('searchMatches: ', playerIds);

  if (!playerIds) {
    resp.status(500).send('Missing Params');
    return;
  }

  client
    .searchMatches({ playerIds, toDate }, 20)
    .then(matches => JSON.parse(JSON.stringify(matches)))
    .then(matches => _(matches))
    .then(matches => {
      const batch = sdb.batch();
      matches.forEach(match => {
        const matchRef = dbRef.doc(match.id);
        batch.set(matchRef, match);
      });
      return batch
        .commit()
        .then(() => {
          return matches.value();
        })
        .catch(err => Promise.reject(err));
    })
    .then(matches => {
      resp.status(200).send(`Saved ${matches.length} matches`);
    })
    .catch(err => {
      resp.status(500).send(err)
    });
});

exports.getRecentMatchesOLD = functions.https.onRequest((req, resp) => {
  const matchCol = sdb.collection('match');

  const { playerIds } = req.query;

  if (!playerIds) {
    resp.status(500).send('Missing Params');
    return;
  }

  fetch(`https://api.dc01.gamelockerapp.com/shards/global/matches?filter[playerIds]=${playerIds}&filter[createdAt-start]=2017-12-03T00:00:00.870Z`, { headers })
    .then(res => res.json())
    .then(res => res.errors ? Promise.reject(res.errors) : res)
    .then(res => {
      // console.log(_.sample(res.data));
      const includes = _(res.included);
      res.data = _.map(res.data, match => {
        match.attributes.createdAt = new Date(match.attributes.createdAt);
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
