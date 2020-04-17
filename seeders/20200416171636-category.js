"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Desserts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pasta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
