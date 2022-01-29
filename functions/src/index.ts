import * as functions from "firebase-functions";
var latestTweets = require("latest-tweets");

export const twitterCard = functions.https.onRequest((request, response) => {
  latestTweets("TheArtOfFailTV", function (err: any, tweets: any) {
    let tweetId = JSON.stringify(tweets[0]);
    response.set("Access-Control-Allow-Origin", "*");
    response.send(tweetId);
  });
});
