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

exports.getRecentMatches = functions.https.onRequest((req, resp) => {
  const client = new bjs.Client(battlerite_api_key);
  const dbRef = sdb.collection('match');

  const { playerIds } = req.query;

  if (!playerIds) {
    resp.status(500).send('Missing Params');
    return;
  }

  client
    .searchMatches({ playerIds: playerIds }, 5)
    .then(matches => JSON.parse(JSON.stringify(matches)))
    .then(matches => _(matches))
    .then(matches =>
      matches.map(match => {
        match.createdAt = new Date(match.createdAt);
        return match;
      })
    )
    .then(matches => {
      const batch = sdb.batch();
      matches.forEach(match => {
        const matchRef = dbRef.doc(match.id);
        batch.set(matchRef, match);
      });
      return batch
        .commit()
        .then(() => {
          return matches;
        })
        .catch(err => Promise.reject(err));
    })
    .then(matches => {
      resp.send(matches.value());
    })
    .catch(err => {
      resp.status(500).send(err)
    });
});
