const db = require("../../database/index");
const posting = db.posting;
const sequelize = require("sequelize");
const Op = sequelize.Op;

async function createPosting(postingInfo) {
  return posting.create(postingInfo);
}

async function readPostingById(postingId) {
  const data = await posting.findOne({
    where: { id: postingId },
  });
  return data;
}

async function updatePosting(postingId, postingInfo) {
  return posting.update(postingInfo, {
    where: { id: postingId },
  });
}

async function deletePosting(postingId) {
  return posting.destroy({
    where: { id: postingId },
  });
}

async function readPosting(limit = 20) {
  const data = await posting.findAll({
    attributes: ["id", "title", "content", "createdAt"],
    order: [["createdAt", "DESC"]],
  });
  return data;
}

module.exports = { createPosting, readPostingById, updatePosting, deletePosting, readPosting };
