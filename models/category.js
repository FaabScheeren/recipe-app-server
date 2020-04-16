"use strict";
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      name: DataTypes.STRING,
      recipe_id: DataTypes.INTEGER,
    },
    {}
  );
  category.associate = function (models) {
    category.belongsToMany(models.recipe);
  };
  return category;
};
