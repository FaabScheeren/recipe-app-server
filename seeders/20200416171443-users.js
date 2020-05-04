"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: "Fabio",
          last_name: "Scheeren",
          email: "f.scheeren@outlook.com",
          password: "fabio123",
          userImage:
            "https://res.cloudinary.com/dcmi604u7/image/upload/v1588614551/fabio_qlp7hy.jpg",
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
