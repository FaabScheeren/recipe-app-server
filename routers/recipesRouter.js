const { Router } = require("express");
const auth = require("../auth/authMiddleware");
const User = require("../models/").user;
const Recipes = require("../models/").recipe;
const Steps = require("../models/").step;
const Ingredients = require("../models/").ingredient;
const Media = require("../models/").media;
const Category = require("../models/").category;

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

router.get("/details/:id", auth, async (req, res) => {
  const { id } = req.params;
  console.log("RECIPE ID", id);

  try {
    const recipe = await Recipes.findByPk(id, {
      include: [
        { model: Media, attributes: ["file_name"] },
        { model: User, attributes: ["first_name", "last_name"] },
        { model: Steps, attributes: ["description"] },
        { model: Ingredients, attributes: ["product_name"] },
        { model: Category, attributes: ["name"] },
      ],
    });
    return res.status(200).send(recipe);
  } catch (e) {
    return res.status(500).send(`Something went wrong, sorry: ${e.message}`);
  }
});

router.post("/", auth, async (req, res) => {
  const {
    title,
    description,
    stepsArray,
    cookingTime,
    category,
    ingredientsArray,
  } = req.body;

  const { id } = req.user.dataValues;
  const user = req.user.dataValues;

  // console.log(`Title:${title},
  // description: ${description},
  // stepsArray: ${stepsArray},
  // cookingTime: ${cookingTime},
  // category: ${category},
  // ingredientsArray: ${ingredientsArray}
  // id: ${id}`);

  try {
    const newRecipe = await Recipes.create({
      userId: id,
      title,
      description,
      cooking_time: cookingTime,
      categoryId: category,
      is_public: true,
    });

    const recipeId = newRecipe.dataValues["id"];

    const steps = await stepsArray.forEach((item) => {
      const step = Steps.create({
        description: item,
        recipeId,
      });
      return step;
    });

    // console.log("Steps", steps);

    const ingredients = await ingredientsArray.forEach((item) => {
      const ingredient = Ingredients.create({
        product_name: item,
        recipeId,
      });
      return ingredient;
    });

    const recipe = {
      ...newRecipe.toJSON(),
      user,
      steps: stepsArray,
      ingredients: ingredientsArray,
    };

    res.status(200).json(recipe);
  } catch (e) {
    return res.send(`Something went wrong, sorry: ${e.message}`);
  }
});

module.exports = router;
