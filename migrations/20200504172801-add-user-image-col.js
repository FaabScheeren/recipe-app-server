"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("users", "userImage", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("users", "isVerified", {
        type: Sequelize.BOOLEAN,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("users", "userImage"),
      queryInterface.removeColumn("users", "isVerified"),
    ]);
  },
};
