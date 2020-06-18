// var express = require("express"),
//   http = require("http"),
//   path = require("path"),
//   db = require("./models");
// // , routes  = require('./routes')
// // , user    = require('./routes/user')

// const userRouter = require("./routers/userRouter");
// const recipeRouter = require("./routers/recipesRouter");

// var app = express();

// // all environments
// app.set("port", process.env.PORT || 3000);
// app.set("views", __dirname + "/views");
// app.set("view engine", "jade");
// app.use(express.favicon());
// app.use(express.logger("dev"));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", userRouter);
// app.use("/recipes", recipeRouter);

// // development only
// if ("development" === app.get("env")) {
//   app.use(express.errorHandler());
// }

// // app.get('/', routes.index);
// // app.get('/users', user.list);

// db.sequelize.sync().then(function () {
//   http.createServer(app).listen(app.get("port"), function () {
//     console.log("Express server listening on port " + app.get("port"));
//   });
// });

const express = require("express");
const app = express();
const loggerMiddleWare = require("morgan");
const bodyParserMiddleWare = express.json();
const corsMiddleWare = require("cors");

const userRouter = require("./routers/userRouter");
const recipeRouter = require("./routers/recipesRouter");

app.use(loggerMiddleWare("dev"));
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());

app.use("/", userRouter);
app.use("/recipes", recipeRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
