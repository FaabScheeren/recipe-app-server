"use strict";
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {}
  );
  category.associate = function (models) {
    category.hasMany(models.recipe);
  };
  return category;
};
