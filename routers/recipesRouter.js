const { Router } = require("express");
const auth = require("../auth/authMiddleware");
const User = require("../models/").user;
const Recipes = require("../models/").recipe;
const Steps = require("../models/").step;
const Ingredients = require("../models/").ingredient;
const Media = require("../models/").media;

const router = new Router();

router.get("/", auth, async (req, res) => {
  console.log("User in route", req.user);
  try {
    const recipes = await Recipes.findAll({
      include: [
        Media,
        { model: User, attributes: ["first_name", "last_name"] },
        Steps,
        Ingredients,
      ],
    });

    return res.status(200).send(recipes);
  } catch (e) {
    return res.status(500).send(`Something went wrong, sorry: ${e.message}`);
  }
});

module.exports = router;
