"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ingredients",
      [
        {
          product_name: "1 ½ cups all-purpose flour",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "6 tablespoons unsweetened cocoa powder",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "1 teaspoon baking soda",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "1 teaspoon baking powder",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "½ cup butter, softened",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Recipe 2
        {
          product_name: "100g pancetta",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "50g pecorino cheese",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "50g parmesan",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "3 large eggs",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "350g spaghetti",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Recipe 3
        {
          product_name: "2 cups long-grain white rice",
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "3 tablespoons vegetable oil",
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "1 large onion, thinly sliced",
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "½ teaspoon cumin seeds",
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "2 bay leaves, broken in half",
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ingredients", null, {});
  },
};
