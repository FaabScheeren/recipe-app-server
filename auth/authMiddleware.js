const User = require("../models/").user;
const { toData } = require("./jwt");

const auth = async (req, res, next) => {
  console.log("req headers", req.headers.authorization);
  const authorization = req.headers.authorization.split(" ");

  if (!authorization || !authorization[0] === "Bearer" || !authorization[1]) {
    console.log("You must be logged in");
    res.status(401).send("You must be logged in.");
  }

  try {
    const data = toData(authorization[1]);

    const user = await User.findByPk(data.userId);

    if (!user) {
      return res.status(404).send("User doesn't exist!!");
    }

    req.user = { ...user, token: authorization[1] };
    return next();
  } catch (e) {
    res.status(404).send("User didn't exists....");
  }
};

module.exports = auth;
