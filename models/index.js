"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// if (!global.hasOwnProperty("db")) {
//   var Sequelize = require("sequelize"),
//     sequelize = null;

//   if (process.env.HEROKU_POSTGRESQL_TRANSPARENT_URL) {
//     // the application is executed on Heroku ... use the postgres database
//     sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_TRANSPARENT_URL, {
//       dialect: "postgres",
//       protocol: "postgres",
//       port: match[4],
//       host: match[3],
//       logging: true, //false
//     });
//   } else {
//     // the application is executed on the local machine ... use mysql
//     sequelize = new Sequelize("example-app-db", "root", null);
//   }

//   global.db = {
//     Sequelize: Sequelize,
//     sequelize: sequelize,
//     User: sequelize.import(__dirname + "/user"),
//     Category: sequelize.import(__dirname + "/category"),
//     Ingredients: sequelize.import(__dirname + "/ingredients"),
//     Media: sequelize.import(__dirname + "/media"),
//     Recipe: sequelize.import(__dirname + "/recipe"),
//     Step: sequelize.import(__dirname + "/step"),
//   };

/*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
// }

// module.exports = global.db;
