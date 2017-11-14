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
        directions: "Cut the bacon into ½” x 2” strips and sauté in olive oil in a cast-iron skillet over medium " +
            "heat. When lightly browned, set the bacon aside while leaving the grease in the skillet. Raise the " +
            "temperature until almost smoking and lightly brown the beef in small batches and set aside with the " +
            "bacon."
    }, {
        ingredients: [
            { amount: 1, unit: "lb", item: "mushrooms (brown)" },
        ],
        directions: "Partially cook the mushrooms in the same skillet using the bacon grease and drippings from the " +
            "meat until they've just started to reduce and have soaked up the remaining bacon grease. Then, set " +
            "them aside."
    }, {
        ingredients: [
            { amount: 2, unit: "tbsp", item: "flour" },
            { amount: 1/2, unit: "tsp", item: "salt" },
            { amount: 1/2, unit: "tsp", item: "black pepper" },
        ],
        directions: "Preheat the oven to 375°F. Return the beef and bacon to the cast-iron skillet and toss with " +
            "the salt, pepper, and flour. Cover and place in the oven to cook all the way through, tossing once in " +
            "the middle. (about 8 min total)"
    }, {
        ingredients: [
            { amount: 4, unit: "sprigs", item: "parsley" },
            { amount: 1/2, unit: "leaf", item: "bay leaf" },
            { amount: 1/4, unit: "tsp", item: "thyme" },
        ],
        directions: "Create a herb bouquet by crushing the various herbs by hand and wrapping them in cheese " +
            "cloth. Tie off the bundle with some string to close, and be sure to leave plenty of extra string."
    }, {
        ingredients: [
            { amount: 3, unit: "cups", item: "red wine" },
            { amount: 2 + 1/2, unit: "cups", item: "beef stock" },
            { amount: 1, unit: "tbsp", item: "tomato paste" },
            { amount: 2, unit: "cloves", item: "garlic (minced)" },
            { amount: 1/2, unit: "tsp", item: "thyme" },
            { amount: 1, unit: "", item: "bay leaf" },
        ],
        directions: "In a large soup pot, combine the meat with the red wine, tomato paste, herbs, herb bouquet, " +
            "and enough beef stock to just cover the meat. Bring to a simmer on the stovetop and cook until the " +
            "meat is soft and crumbling, stirring occasionally. (3-4 hours)"
    }, {
        ingredients: [
            { amount: 24, unit: "", item: "onions (small, white)" },
            { amount: 1/2, unit: "cups", item: "beef stock" },
            { amount: 1, unit: "tbsp", item: "butter" },
            { amount: 1, unit: "tbsp", item: "olive oil" },
            { amount: 1/2, unit: "tsp", item: "salt" },
            { amount: 1/2, unit: "tsp", item: "pepper" },
        ],
        directions: "With about 30 min remaining on the previous step, add butter and olive oil to the cast-iron " +
            "skillet. Once the butter foams, add the reserved onions and sautée over medium heat until the onions " +
            "are evenly browned, taking care not to break their skins. Add the beef stock, salt, and black pepper. " +
            "Simmer until the onions are tender and the liquid has evaporated. Set the onions aside."
    }, {
        ingredients: [
            { amount: 1, unit: "tbsp", item: "butter" },
            { amount: 1, unit: "tbsp", item: "olive oil" },
        ],
        directions: "Clean the skillet and heat another portion of butter and olive oil over high heat. Once the " +
            "butter foams, add the mushrooms. Sautée until soft and translucent. Set the mushrooms aside."
    }, {
        directions: "Once the meat is finished cooking, discard the herb bouquet, and strain the meat while " +
            "retaining the liquid. Place the meat in a large serving dish, and add first the mushrooms and then " +
            "the onions on top. Cover, and set aside in the oven (turned off) to keep warm."
    }, {
        directions: "Reduce the retained liquids in a large saucepan over high heat. Skim the fat from the top as " +
            "it rises. Continue to simmer until the sauce has the consistency of heavy cream. When finished, gently " +
            "add the sauce to the serving dish. (about 20 min)"
    }]
})
