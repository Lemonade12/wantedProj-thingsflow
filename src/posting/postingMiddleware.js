const bcrypt = require("bcrypt");
const postingRepo = require("./postingRepository");

const isValidPosting = async (req, res, next) => {
  const postingInfo = req.body;
  if (postingInfo.title.length > 20) {
    return res.status(400).json({ message: "제목은 최대 20자 입니다." });
  } else if (postingInfo.content.length > 200) {
    return res.status(400).json({ message: "본문은 최대 200자 입니다." });
  } else if (postingInfo.password.length < 6) {
    return res.status(400).json({ message: "비밀번호는 6자 이상 입니다." });
  } else if (!isIncludeNumber(postingInfo.password)) {
    return res
      .status(400)
      .json({ message: "비밀번호에 숫자는 반드시 1개 이상 포함 되어야 합니다." });
  }
  next();
};

function isIncludeNumber(password) {
  var regex = /[^0-9]/g;
  var result = password.replace(regex, "");
  if (result.length >= 1) {
    return true;
  } else {
    return false;
  }
}

module.exports = { isValidPosting };
