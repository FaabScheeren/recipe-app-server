"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ingredients",
      [
        {
          product_name: "1 ½ cups all-purpose flour",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "6 tablespoons unsweetened cocoa powder",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "1 teaspoon baking soda",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "1 teaspoon baking powder",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "½ cup butter, softened",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Recipe 2
        {
          product_name: "100g pancetta",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "50g pecorino cheese",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "50g parmesan",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "3 large eggs",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "350g spaghetti",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Recipe 3
        {
          product_name: "2 cups long-grain white rice",
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "3 tablespoons vegetable oil",
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "1 large onion, thinly sliced",
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "½ teaspoon cumin seeds",
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: "2 bay leaves, broken in half",
          recipeId: 3,
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
