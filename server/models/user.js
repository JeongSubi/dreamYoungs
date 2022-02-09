"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      index: {
        type: DataTypes.BIGINT(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: DataTypes.CHAR(64),
      userDesc: DataTypes.TEXT,
      hasCat: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
