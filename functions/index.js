const functions = require('firebase-functions');
const admin = require('firebase-admin');
const _ = require('lodash');
const battlerite = require('./lib/api');
const { mapMatch, mapMatches } = require('./lib/api/entitymapper');

admin.initializeApp(functions.config().firebase);
const sdb = admin.firestore();

exports.getMatch = functions.https.onRequest((req, resp) => {
  const matchRef = sdb.collection('match');

  const { matchId } = req.query;
  console.log('getMatch: ', matchId);

  if (!matchId) {
    resp.status(500).send('Missing Params');
    return;
  }

  battlerite.getMatch(matchId)
    .then(response => mapMatch(response))
    .then(match => matchRef.doc(match.id).set(match))
    .then(() => resp.status(200).send('SUCCESS'))
    .catch(err => {
      console.error(err);
      resp.status(500).send('ERROR');
    });
});


exports.searchMatches = functions.https.onRequest((req, resp) => {
  const matchRef = sdb.collection('match');

  const { playerIds } = req.query;
  console.log('userIds: ', playerIds);

  if (!playerIds) {
    resp.status(500).send('Missing Params');
    return;
  }

  battlerite.searchMatches({ playerIds })
    .then(response => mapMatches(response))
    .then(matches => {
      const batch = sdb.batch();
      _.forEach(matches, match => {
        const mRef = matchRef.doc(match.id);
        batch.set(mRef, match);
      });
      return batch.commit();
    })
    .then(() => resp.status(200).send('SUCCESS'))
    .catch(err => {
      console.error(err);
      resp.status(500).send('ERROR')
    });
})
