const router = require("express").Router();
const client = require("../config/nlu");
require('dotenv').config()

router.get("/nlu/:string", function (req, res) {
    const analyzeParams = {
      'text': req.params.string,
      'features': {
          'entities': {
              'model': process.env.NLU_MODEL,
              'mentions': true
          }
      },
      'language': 'en',
     };

client.analyze(analyzeParams)
    .then(analysisResults => {
        console.log(JSON.stringify(analysisResults, null, 2));
    res.status(201).json({
        message: 'NLU search',
        analysisResults: analysisResults
    });
})
    .catch(err => {
        console.log('error:', err);
    });
})

module.exports = router;

