const express = require("express");
const postingController = require("./postingController");
const postingMiddleware = require("./postingMiddleware");

const router = express.Router();

router.post("/api/posting", postingMiddleware.isValidPosting, postingController.createPosting);

module.exports = router;
