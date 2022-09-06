const express = require("express");
const postingController = require("./postingController");

const router = express.Router();

router.post("/posting", postingController.createPosting);

module.exports = router;
