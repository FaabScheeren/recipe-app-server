"use strict";
module.exports = (sequelize, DataTypes) => {
  const media = sequelize.define(
    "media",
    {
      file_name: DataTypes.STRING,
      recipeId: DataTypes.INTEGER,
    },
    {}
  );
  media.associate = function (models) {
    media.belongsTo(models.recipe);
  };
  return media;
};
