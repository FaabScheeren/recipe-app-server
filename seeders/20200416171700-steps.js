"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "steps",
      [
        {
          description:
            "Preheat oven to 350 degrees F (175 degrees C). Grease the base and sides of a 10-inch fluted tube pan. Dust lightly with flour; tap to remove excess.",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Fill a shallow baking pan with enough water to come 1/3 of the way up the sides of the tube pan. Place water bath in the oven to warm up while it is preheating.",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Pour caramel sauce into a microwave-safe bowl. Microwave until warm and pourable, about 1 minute. Pour into the prepared tube pan, covering the base completely.",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Mix flour, cocoa powder, baking soda, and baking powder together in a bowl.",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Beat 1/2 cup plus 2 1/2 tablespoons butter in a bowl with an electric mixer until smooth. Add sugar; beat until light and fluffy. Beat in 1 egg and coffee. Alternate adding flour mixture and milk, mixing well between additions. Pour cake batter evenly over caramel in the tube pan.",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Combine evaporated milk, condensed milk, 4 eggs, and vanilla extract in the bowl of a food processor; blend until smooth. Pour over cake batter through a fine sieve.",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Bake in the water bath in the preheated oven until a toothpick inserted into the chocolate cake comes out clean, about 1 hour.",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Let cake cool, about 1 hour. Carefully run a thin knife around the edges to loosen the cake, cover with a serving plate, and flip onto the plate.",
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Recipe 2
        {
          description: "Put a large saucepan of water on to boil.",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Finely chop the 100g pancetta, having first removed any rind. Finely grate 50g pecorino cheese and 50g parmesan and mix them together.",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Beat the 3 large eggs in a medium bowl and season with a little freshly grated black pepper. Set everything aside.",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Add 1 tsp salt to the boiling water, add 350g spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente (just cooked).",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it.",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "While the spaghetti is cooking, fry the pancetta with the garlic. Drop 50g unsalted butter into a large frying pan or wok and, as soon as the butter has melted, tip in the pancetta and garlic.",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Leave to cook on a medium heat for about 5 minutes, stirring often, until the pancetta is golden and crisp. The garlic has now imparted its flavour, so take it out with a slotted spoon and discard.",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Keep the heat under the pancetta on low. When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta. Don’t worry if a little water drops in the pan as well (you want this to happen) and don’t throw the pasta water away yet.",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later.",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Take the pan of spaghetti and pancetta off the heat. Now quickly pour in the eggs and cheese. Using the tongs or a long fork, lift up the spaghetti so it mixes easily with the egg mixture, which thickens but doesn’t scramble, and everything is coated.",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Add extra pasta cooking water to keep it saucy (several tablespoons should do it). You don’t want it wet, just moist. Season with a little salt, if needed.",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Use a long-pronged fork to twist the pasta on to the serving plate or bowl. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper. If the dish does get a little dry before serving, splash in some more hot pasta water and the glossy sauciness will be revived.",
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Recipe 3
        {
          description:
            "Place rice in large container and cover with several inches of cool water; let soak for 20 minutes. Drain.",
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Heat oil in a pressure cooker over medium heat. Add onion, cumin seeds, and bay leaves; cook and stir until onion is translucent, about 5 minutes. Stir in potatoes and carrots; cook until lightly browned, about 5 minutes. Stir in turmeric, chile powder, and coriander; cook until fragrant, about 1 minute.",
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Stir rice gently into the pressure cooker until evenly coated with oil. Pour in water and peas. Stir in salt, butter, and garam masala. Seal cooker and bring to high pressure according to manufacturer's instructions. Cook for 5 minutes. Remove from heat.",
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description:
            "Release pressure naturally according to manufacturer's instructions. Fluff rice with a fork.",
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("steps", null, {});
  },
};
