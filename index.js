const express = require("express");
const app = express();
// const loggerMiddleWare = require("morgan");
const bodyParserMiddleWare = express.json();
// const corsMiddleWare = require("cors");

const userRouter = require("./routers/userRouter");

// app.use(loggerMiddleWare("dev"));
app.use(bodyParserMiddleWare);
// app.use(corsMiddleWare());

app.use("/", userRouter);

app.listen(3000, () => {
  console.log(`Listening on port: 3000`);
});
