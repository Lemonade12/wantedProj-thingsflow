const { StatusCodes } = require("http-status-codes");

async function createPosting(req, res) {
  try {
    //const data = await statisticService.readUsersCountByGender();
    return res.status(StatusCodes.OK).send({ fdsaf: "fdsaf" });
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
