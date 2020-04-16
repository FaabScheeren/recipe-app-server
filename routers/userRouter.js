const { Router } = require("express");
const User = require("../models/").user;
const Recipes = require("../models/").recipe;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    // const users = await User.findAll({
    //   include: [
    //     {
    //       model: Recipes,
    //       // where: {user_id: }
    //     },
    //   ],
    // });

    const users = await User.findByPk(1, {
      include: [
        {
          model: Recipes,
          // where: {user_id: }
        },
      ],
    });

    return res.status(400).send(users);
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

module.exports = router;
