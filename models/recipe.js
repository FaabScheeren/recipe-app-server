"use strict";
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define(
    "recipe",
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      cooking_time: DataTypes.INTEGER,
      category: DataTypes.INTEGER,
      is_public: DataTypes.BOOLEAN,
    },
    {}
  );
  recipe.associate = function (models) {
    recipe.hasMany(models.step);
    recipe.hasMany(models.media);
    recipe.hasMany(models.ingredient);
    recipe.hasOne(models.category);
    recipe.belongsTo(models.user);
  };
  return recipe;
};
