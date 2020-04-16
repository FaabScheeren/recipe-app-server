"use strict";
module.exports = (sequelize, DataTypes) => {
  const step = sequelize.define(
    "step",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      recipe_id: DataTypes.INTEGER,
    },
    {}
  );
  step.associate = function (models) {
    step.belongsTo(models.recipe);
  };
  return step;
};
