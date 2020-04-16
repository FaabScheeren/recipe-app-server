"use strict";
module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define(
    "ingredient",
    {
      product_name: DataTypes.STRING,
      recipe_id: DataTypes.INTEGER,
    },
    {}
  );
  ingredient.associate = function (models) {
    ingredient.belongsTo(models.recipe);
  };
  return ingredient;
};
