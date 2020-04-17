"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "media",
      [
        {
          file_name:
            "https://www.aspicyperspective.com/wp-content/uploads/2018/08/chocoflan-impossible-cake-11.jpg",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file_name:
            "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1001491_11.jpg?itok=-ns0A_kt",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          file_name:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4433065.jpg&w=596&h=596&c=sc&poi=face&q=85",
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("media", null, {});
  },
};
