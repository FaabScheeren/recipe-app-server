const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const User = require("../models/").user;
const Recipes = require("../models/").recipe;
const Steps = require("../models/").step;
const Ingredients = require("../models/").ingredient;

const router = new Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!first_name || !last_name || !email || !password) {
    return res.status(400).send("Please provide all fields.");
  }

  try {
    const user = User.create({
      first_name,
      last_name,
      email,
      password,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: user.id });

    return res.status(200).send({ token, ...user.dataValues });
  } catch (e) {
    return res.status(400).send("Something went wrong, sorry.");
  }
});

router.get("/user", async (req, res) => {
  try {
    const users = await User.findByPk(1, {
      include: [
        {
          model: Recipes,
          include: [Steps, Ingredients],
        },
      ],
    });

    return res.status(400).send(users);
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

module.exports = router;
