module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "post",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING(40),
      },
      content: {
        type: DataTypes.STRING(400),
      },
      weather: {
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: true,
      charset: "utf8mb4",
    }
  );
};
