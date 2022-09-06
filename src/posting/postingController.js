const { StatusCodes } = require("http-status-codes");
const postingService = require("./postingService");

async function createPosting(req, res) {
  try {
    const postingInfo = req.body;
    await postingService.createPosting(postingInfo);
    return res.status(StatusCodes.OK).send({ message: "게시글 등록 완료" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function updatePosting(req, res) {
  try {
    const postingId = req.params.id;
    const { title, content, password } = req.body;
    const postingInfo = { title, content };
    await postingService.updatePosting(postingId, postingInfo, password);
    return res.status(StatusCodes.OK).send({ message: "게시글 수정 완료" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function deletePosting(req, res) {
  try {
    const postingId = req.params.id;
    const password = req.body.password;
    await postingService.deletePosting(postingId, password);
    return res.status(StatusCodes.OK).send({ message: "게시글 삭제 완료" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function readPosting(req, res) {
  try {
    const data = await postingService.readPosting();
    return res.status(StatusCodes.OK).send({ data });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = {
  createPosting,
  updatePosting,
  deletePosting,
  readPosting,
};
