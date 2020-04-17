"use strict";
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define(
    "ingredient",
    {
      product_name: DataTypes.STRING,
      recipeId: DataTypes.INTEGER,
    },
    {}
  );
  ingredient.associate = function (models) {
    ingredient.belongsTo(models.recipe);
  };
  return ingredient;
};
