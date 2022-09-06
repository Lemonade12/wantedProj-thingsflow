const { StatusCodes } = require("http-status-codes");
const postingService = require("./postingService");

async function createPosting(req, res) {
  try {
    const postingInfo = req.body;
    await postingService.createPosting(postingInfo);
    return res.status(StatusCodes.OK).send({ message: "게시글 등록 완료" });
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      error: "Internal Server Error",
    });
  }
}

module.exports = {
  createPosting,
};
