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
