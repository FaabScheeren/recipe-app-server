"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "recipes",
      [
        {
          userId: 1,
          title: "Impossible Cake",
          description:
            "This cake has a reputation! A sweet and tempting caramel is drizzled into a greased Bundt® pan, followed by a gorgeous smooth mixture for a moist and rich chocolate cake and a layer of flan. Serve topped with more melted cajeta if you wish.",
          cooking_time: 60,
          categoryId: 1,
          is_public: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          title: "Ultimate spaghetti carbonara recipe",
          description:
            "Discover how to make superb spaghetti carbonara. This cheesy pasta dish is an Italian favourite and with the right technique, you can make it perfect every time",
          cooking_time: 30,
          categoryId: 2,
          is_public: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          title: "Vegetable Biryani (Tehri)",
          description:
            "Tehri was originally concocted by kings in northern India as a vegetarian equivalent to the Mughals' mutton or chicken biryani. This modern-day version has deliciously soft sweet vegetables and flavorful long-grain rice. Serve with chilled yogurt and spicy curry on the side.",
          cooking_time: 30,
          categoryId: 3,
          is_public: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("recipes", null, {});
  },
};
