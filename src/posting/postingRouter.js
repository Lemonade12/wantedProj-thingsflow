const express = require("express");
const postingController = require("./postingController");
const postingMiddleware = require("./postingMiddleware");

const router = express.Router();

router.post("/posting", postingMiddleware.isValidPosting, postingController.createPosting);
router.patch("/posting/:id", postingMiddleware.isValidPosting, postingController.updatePosting);

module.exports = router;
