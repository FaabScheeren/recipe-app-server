const User = require("../models/").user;
const { toData } = require("./jwt");

const auth = async (req, res, next) => {
  const authorization = req.headers.authorization.split(" ");

  if (!authorization || !authorization[0] === "Bearer" || !authorization[1]) {
    res.status(401).send("You must be logged in.");
  }

  try {
    const data = toData(authorization[1]);
    // console.log("DATA", data.userId);

    const user = await User.findByPk(data.userId);
    // console.log("USER:", user);

    if (!user) {
      return res.status(404).send("User doesn't exist!!");
    }

    req.user = user;
    return next();
  } catch (e) {
    res.status(404).send("User didn't exists....");
  }
};

module.exports = auth;
