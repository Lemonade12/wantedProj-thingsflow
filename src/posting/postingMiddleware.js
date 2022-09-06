const bcrypt = require("bcrypt");

const isValidPosting = async (req, res, next) => {
  const postingInfo = req.body;
  console.log(postingInfo.title);
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
  req.body.password = await encryptPassword(postingInfo.password);
  next();
};

function isIncludeNumber(password) {
  var regex = /[^0-9]/g;
  var result = password.replace(regex, "");
  console.log(result);
  if (result.length >= 1) {
    return true;
  } else {
    return false;
  }
}

async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const result = await bcrypt.hash(password, salt);
  return result;
}

module.exports = { isValidPosting };
