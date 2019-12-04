const objectStore = require("ibm-cos-sdk");
require('dotenv').config();

const config = {
  endpoint: process.env.COS_ENDPOINT,
  accessKeyId: process.env.COS_ACCESSKEYID, 
  secretAccessKey: process.env.COS_SECRETACCESSKEY,
  region: process.env.COS_REGION,
};

module.exports = cos = new objectStore.S3(config);

