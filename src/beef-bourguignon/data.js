module.exports = require("../helpers")({
    title: "Beef Bourguignon",
    timings: {
        prep: "45 min",
        cook: "3-4 hours",
    },
    icons: ["gluten-free", "low-carb"],
    servings: 6,
    description: "Adapted from Julia Child's famous recipe, this rich and extravagant beef stew is absolutely worth " +
        "work required!",
    steps: [{
        ingredients: [
            { amount: 3, unit: "lbs", item: "stew beef" },
            { amount: 6, unit: "oz", item: "thick-cut bacon" },
            { amount: 1, unit: "tbsp", item: "olive oil" },
        ],
        directions: "Sauté the bacon in olive oil in a cast-iron skillet over medium heat. When lightly browned, " +
            "set the bacon aside while leaving the grease in the skillet. Raise the temperature until almost " +
            "smoking and brown the beef in small batches and set aside with the bacon."
    }, {
        ingredients: [
            { amount: 1, unit: "lb", item: "mushrooms (brown)" },
            { amount: 20, unit: "", item: "onions (small, white)" },
        ],
        directions: "Lightly cook the onions and mushrooms in the same skillet using the bacon grease and drippings " +
            "from the meat until they've just started to brown. When finished, set the vegetables aside separately " +
            "and discard the excess grease."
    }, {
        ingredients: [
            { amount: 2, unit: "tbsp", item: "flour" },
            { amount: 1/2, unit: "tsp", item: "salt" },
            { amount: 1/2, unit: "tsp", item: "black pepper" },
        ],
        directions: "Return the beef and bacon to the cast-iron skillet and toss with the salt, pepper, and flour. " +
            "Place in the oven to cook all the way through, tossing once in the middle (about 8 min total)."
    }, {
        ingredients: [
            { amount: 3, unit: "cups", item: "red wine" },
            { amount: 2 + 1/2, unit: "cups", item: "beef stock" },
            { amount: 1, unit: "tbsp", item: "tomato paste" },
            { amount: 2, unit: "cloves", item: "garlic (minced)" },
            { amount: 1/2, unit: "tsp", item: "thyme" },
            { amount: 1, unit: "", item: "bay leaf (crumbled)" },
        ],
        directions: "Add the red wine and enough beef stock to just cover the meat. Add the herbs, herb bouquet. " +
            "Bring to a simmer on the stovetop, and then cover and place in the oven at 375°F (adjust as needed to " +
            "maintain a low simmer) until the meat is soft and crumbling (3-4 hours)."
    }, {
        ingredients: [
            { amount: 4, unit: "sprigs", item: "parsley" },
            { amount: 1/2, unit: "leaf", item: "bay leaf" },
            { amount: 1/4, unit: "tsp", item: "thyme" },
        ],
        directions: "When there's about 1 hour remaining on the prior step, create a herb bouquet by crushing the " +
            "various herbs by hand and wrapping them in a few layers of cheese cloth. Tie off the cloth to close, " +
            "and leave plenty of extra string."
    }, {
        ingredients: [
            { amount: 1/2, unit: "cups", item: "beef stock" },
            { amount: 1, unit: "tbsp", item: "butter" },
            { amount: 1, unit: "tbsp", item: "olive oil" },
            { amount: 1/2, unit: "tsp", item: "salt" },
            { amount: 1/2, unit: "tsp", item: "pepper" },
        ],
        directions: "Add butter and olive oil to a second cast-iron skillet. Once the butter foams, add the " +
            "reserved onions and sautée over medium heat until the onions are evenly browned, taking care not to " +
            "break their skins. Finally, add the beef stock, salt, black pepper, and herb bouquet. Cover and simmer " +
            "until the onions are tender and the liquid has evaporated. Discard the bouquet, and set the onions aside."
    }, {
        ingredients: [
            { amount: 1, unit: "tbsp", item: "butter" },
            { amount: 1, unit: "tbsp", item: "olive oil" },
        ],
        directions: "Clean the second skillet, and heat another portion of butter and olive oil over high heat. " +
            "Once the butter foams, add the mushrooms. Sautée until soft and translucent. Set the mushrooms aside."
    }, {
        directions: "Once the meat is finished cooking, remove the first skillet from the oven and strain the " +
            "solids while retaining the liquid in a large saucepan. Rinse the skillet and return the solids to it. " +
            "Add the mushrooms as a layer on top, and then arrange the onions around the edge."
    }, {
        ingredients: [
            { amount: 1/4, unit: "cup", item: "beef stock" },
        ],
        directions: "Skim the fat from the retained liquid in the saucepan. Simmer while continuing to skim off the " +
            "fat until the sauce is thick enough to cover the back of a spoon. Add more beef stock if it is already " +
            "too thick when starting. When finished, gently pour the sauce over the meat in the first skillet."
    }]
})
