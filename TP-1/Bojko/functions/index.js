'use strict';

const functions = require('firebase-functions');
const requestFm = require('request-promise');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.trends = functions.https.onRequest(async (request, response) => {
    try {
        const res = await requestFm({
            uri: 'https://api.twitter.com/1.1/trends/place.json',
            qs: {
                id: 1
            },
            method: 'GET',
            headers: {
                'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAKmBEgEAAAAAuFyD6%2FW%2BlBm6LsOtmioG10a0%2Bj0%3Dkg8kcEN3NMjmmPpXYVfGBl28chzpkc5V7j27pzmbqXE3TIHf50'
            },
            json: true
        });
    
        response.send(res);
    } catch(err) {
        response.send('error');
    }
});
