const naturalLanguageUnderstanding = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
require('dotenv').config();

const client = new naturalLanguageUnderstanding({
  version: process.env.NLU_VERSION,
  authenticator: new IamAuthenticator({
    apikey: process.env.NLU_APIKEY,
  }),
  url: process.env.NLU_URL,
});

module.exports = client