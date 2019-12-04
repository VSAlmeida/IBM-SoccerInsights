const Twitter = require("twitter");
require('dotenv').config();

module.exports = client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMERKEY,
  consumer_secret: process.env.TWITTER_CONSUMERSECRET,
  access_token_key: process.env.TWITTER_ACCESSTOKENKEY,
  access_token_secret: process.env.TWITTER_ACCESSTOKENSECRET,
});