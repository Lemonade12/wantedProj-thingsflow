var DataTypes = require("sequelize").DataTypes;
var postingModel = require("../src/posting/postingModel");

function initModels(sequelize) {
  var posting = postingModel(sequelize, DataTypes);

  return {
    posting,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
