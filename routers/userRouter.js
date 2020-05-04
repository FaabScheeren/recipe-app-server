const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const auth = require("../auth/authMiddleware");
const User = require("../models/").user;
const Recipes = require("../models/").recipe;
const Steps = require("../models/").step;
const Ingredients = require("../models/").ingredient;
const Category = require("../models/").category;
const Media = require("../models/").media;

const router = new Router();

router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  // console.log("BODY", req.body);

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).send("Please provide all fields.");
  }

  try {
    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      userImage:
        "https://res.cloudinary.com/dcmi604u7/image/upload/v1588614214/profile-placeholder-img_uik3kq.jpg",
      isVerified: false,
    });
    // console.log("USER", user);
    delete user.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: user.id });

    return res.status(201).send({ token, ...user.dataValues });
  } catch (e) {
    if (e.name === "SequelizeUniqueConstraintError") {
      return res
        .status(409)
        .send("There is already an existing account with this email");
    }

    return res
      .status(500)
      .send(`Something went wrong, sorry: ${e.message} - ${e}`);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log("BODY IN LOGIN", req.body);

  if (!email || !password) {
    return res.status(400).send("Please provide all fields");
  }

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
      include: [{ model: Recipes, include: [Steps, Ingredients, Category] }],
    });

    if (user && user.password === password) {
      delete user.dataValues["password"];
      const token = toJWT({ userId: user.id });
      res.status(200).send({ token, ...user.dataValues });
    } else if (user === null) {
      return res
        .status(404)
        .send("No user found with this email or password is incorrect.");
    }
  } catch (e) {
    return res.status(400).send(`Something went wrong: ${e.message}`);
  }
});

router.get("/get-user", auth, async (req, res) => {
  delete req.user.dataValues["password"];
  console.log("request:", req.user.dataValues);
  res.status(200).send({ ...req.user.dataValues });
});

router.get("/user-categories", auth, async (req, res) => {
  const id = req.user.dataValues["id"];
  try {
    const categories = await Category.findAll({
      include: [{ model: Recipes, where: { userId: id }, include: [Media] }],
    });
    return res.status(200).send(categories);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
