const express = require("express");
const got = require("got");
const router = express.Router();

router.post("/recaptcha", async (req, res) => {
  try {
    const { success } = await got
      .post(
        "https://www.google.com/recaptcha/api/siteverify?secret=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe&response=123"
      )
      .json();
    return res.json({
      message: success,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
