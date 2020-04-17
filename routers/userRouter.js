const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const User = require("../models/").user;
const Recipes = require("../models/").recipe;
const Steps = require("../models/").step;
const Ingredients = require("../models/").ingredient;

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
    });
    // console.log("USER", user);
    delete user.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: user.id });

    return res.status(200).send({ token, ...user.dataValues });
  } catch (e) {
    return res
      .status(400)
      .send(`Something went wrong, sorry: ${e.message} - ${e}`);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("BODY IN LOGIN", req.body);

  if (!email || !password) {
    return res.status(404).send("Please provide all fields");
  }

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
      include: { model: Recipes, include: [Steps, Ingredients] },
    });
    // console.log("Found user:", user);

    if (user && user.password === password) {
      delete user.dataValues["password"];
      const token = toJWT({ userId: user.id });
      res.status(200).send({ token, ...user.dataValues });
    }
  } catch (e) {
    return res.status(400).send(`Something went wrong: ${e.message}`);
  }
});

// router.get("/user", async (req, res) => {
//   try {
//     const users = await User.findByPk(1, {
//       include: [
//         {
//           model: Recipes,
//           include: [Steps, Ingredients],
//         },
//       ],
//     });

//     return res.status(400).send(users);
//   } catch (e) {
//     return res.status(400).send(e.message);
//   }
// });

module.exports = router;
