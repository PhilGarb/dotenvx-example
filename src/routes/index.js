var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  if (process.env.ENGINE_VERSION === "3") {
    return res.json({
      message: "This is the new version of the API",
    });
  }

  return res.json({
    message: "This is the old version of the API",
  })
});

module.exports = router;
