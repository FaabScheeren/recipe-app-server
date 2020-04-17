"use strict";
module.exports = (sequelize, DataTypes) => {
  const step = sequelize.define(
    "step",
    {
      description: DataTypes.TEXT,
      recipeId: DataTypes.INTEGER,
    },
    {}
  );
  step.associate = function (models) {
    step.belongsTo(models.recipe);
  };
  return step;
};
