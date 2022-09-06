const express = require("express");
const postingRouter = require("./posting/postingRouter");
const router = express.Router();

router.use(postingRouter);

module.exports = router;
