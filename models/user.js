"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      userImage: DataTypes.STRING,
      isVerified: DataTypes.BOOLEAN,
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.recipe);
  };
  return user;
};
