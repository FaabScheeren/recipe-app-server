"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Desserts",
          image:
            "https://res.cloudinary.com/dcmi604u7/image/upload/v1588615371/desserts_yzc1or.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pasta",
          image:
            "https://res.cloudinary.com/dcmi604u7/image/upload/v1588615398/pasta_uttyyv.jpg",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indian",
          image:
            "https://res.cloudinary.com/dcmi604u7/image/upload/v1588615371/indian_ljmkqj.jpg",
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
