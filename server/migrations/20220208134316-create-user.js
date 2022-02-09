"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      index: {
        allowNull: false,
        type: Sequelize.BIGINT(11).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userName: {
        type: Sequelize.CHAR(64),
      },
      userDesc: {
        type: Sequelize.TEXT,
      },
      hasCat: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
