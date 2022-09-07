const postingRepo = require("./postingRepository");
const bcrypt = require("bcrypt");
const axios = require("axios");

async function createPosting(postingInfo) {
  postingInfo.password = await encryptPassword(postingInfo.password);
  const url_for_weather = "http://api.weatherapi.com/v1/current.json";
  weatherInfo = await axios
    .post(
      url_for_weather,
      {},
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: "Seoul",
        },
      }
    )
    .then(function (response) {
      postingInfo.weather = response.data.current.condition.text;
    });
  postingRepo.createPosting(postingInfo);
}

async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const result = await bcrypt.hash(password, salt);
  return result;
}

async function updatePosting(postingId, postingInfo, password) {
  const posting = await postingRepo.readPostingById(postingId);
  if (!posting) {
    const error = new Error("POSTING_NOT_FOUND");
    error.statusCode = 404;
    throw error;
  }
  const isValidPassword = await bcrypt.compare(password, posting.password);

  if (isValidPassword) {
    postingRepo.updatePosting(postingId, postingInfo);
  } else {
    const error = new Error("INVALID_PASSWORD");
    error.statusCode = 401;
    throw error;
  }
}

async function deletePosting(postingId, password) {
  const posting = await postingRepo.readPostingById(postingId);
  if (!posting) {
    const error = new Error("POSTING_NOT_FOUND");
    error.statusCode = 404;
    throw error;
  }
  const isValidPassword = await bcrypt.compare(password, posting.password);

  if (isValidPassword) {
    postingRepo.deletePosting(postingId);
  } else {
    const error = new Error("INVALID_PASSWORD");
    error.statusCode = 401;
    throw error;
  }
}

async function readPosting(page) {
  const data = await postingRepo.readPosting(page);
  return data;
}

module.exports = {
  createPosting,
  updatePosting,
  deletePosting,
  readPosting,
};
