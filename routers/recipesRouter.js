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
  const { limit, offset } = req.query;
  try {
    const recipes = await Recipes.findAndCountAll({
      limit,
      offset,
      where: { is_public: true },
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
  // console.log("RECIPE ID", id);

  try {
    const recipe = await Recipes.findByPk(id, {
      include: [
        { model: Media, attributes: ["file_name"] },
        { model: User, attributes: ["first_name", "last_name"] },
        // { model: Steps, attributes: ["description"] },
        Steps,
        Ingredients,
        { model: Category, attributes: ["name"] },
      ],
    });
    return res.status(200).send(recipe);
  } catch (e) {
    return res.status(500).send(`Something went wrong, sorry: ${e.message}`);
  }
});

// Endpoint to add recipe to database
router.post("/", auth, async (req, res) => {
  const {
    title,
    description,
    stepsArray,
    cookingTime,
    category,
    ingredientsArray,
    photo,
    is_public,
  } = req.body;

  const { id } = req.user.dataValues;
  const user = req.user.dataValues;

  try {
    const newRecipe = await Recipes.create({
      userId: id,
      title,
      description,
      cooking_time: cookingTime,
      categoryId: category,
      is_public,
    });

    const recipeId = newRecipe.dataValues["id"];

    const steps = await stepsArray.forEach((item) => {
      const step = Steps.create({
        description: item,
        recipeId,
      });
      return step;
    });

    const ingredients = await ingredientsArray.forEach((item) => {
      const ingredient = Ingredients.create({
        product_name: item,
        recipeId,
      });
      return ingredient;
    });

    const media = await Media.create({
      file_name: photo,
      recipeId,
    });

    const recipe = {
      ...newRecipe.toJSON(),
      user,
      steps: stepsArray,
      ingredients: ingredientsArray,
      media: [{ ...media.toJSON() }],
    };

    res.status(201).json(recipe);
  } catch (e) {
    return res.status(500).send(`Something went wrong, sorry: ${e.message}`);
  }
});

// Endpoint to change recipe in database
router.patch("/", auth, async (req, res, next) => {
  const {
    id,
    title,
    description,
    stepsArray,
    cookingTime,
    category,
    ingredientsArray,
    photo,
    is_public,
  } = req.body;

  // const { id } = req.user.dataValues;
  const user = req.user.dataValues;

  try {
    const recipe = await Recipes.update(
      {
        title,
        description,
        cooking_time: cookingTime,
        categoryId: category,
        is_public,
      },
      {
        where: { id: id },
      }
    );

    // Item is an object
    const steps = await stepsArray.forEach(async (item) => {
      if (item.hasOwnProperty("id")) {
        try {
          const step = await Steps.update(
            {
              description: item.description,
            },
            {
              where: { recipeId: id, id: item.id },
            }
          );
          return step;
        } catch (e) {
          res
            .status(500)
            .send(`Something went wrong in updating step, sorry: ${e}`);
        }
        next();
      } else {
        try {
          const step = await Steps.create({
            description: item.description,
            recipeId: id,
          });
          return step;
        } catch (e) {
          res
            .status(500)
            .send(`Something went wrong in adding step, sorry: ${e}`);
        }
      }
    });

    // console.log("STEPS", steps);

    const ingredients = await ingredientsArray.forEach(async (item) => {
      if (item.hasOwnProperty("id")) {
        try {
          const ingredient = await Ingredients.update(
            {
              product_name: item.product_name,
            },
            {
              where: { recipeId: id, id: item.id },
            }
          );
          return ingredient;
        } catch (e) {
          res
            .status(500)
            .send(`Something went wrong in updating step, sorry: ${e}`);
        }
        next();
      } else {
        try {
          const ingredient = await Ingredients.create({
            product_name: item.product_name,
            recipeId: id,
          });
          return ingredient;
        } catch (e) {
          res
            .status(500)
            .send(`Something went wrong in adding step, sorry: ${e}`);
        }
      }
    });

    res.status(200).send(recipe);
  } catch (e) {
    console.log(`Error: ${e}`);
    return res.status(500).send(`Something went wrong, sorry: ${e.message}`);
  }
});

router.get("/categories", auth, async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).send(categories);
  } catch (e) {
    res.status(500).send(`Something went wrong, sorry: ${e.message}`);
  }
});

module.exports = router;
