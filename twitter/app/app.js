const router = require("express").Router();
const client = require("../config/twitter");

router.get("/search/:tweet", function (req, res) {
  client.get("search/tweets", {q: req.params.tweet, count: 50}, function(error, tweets, response) {
    res.status(201).json({
      message: "Tweets",
      tweets: tweets
    });
  });
})

module.exports = router