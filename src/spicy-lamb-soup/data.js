module.exports = require("../helpers")({
    title: "Spicy Lamb Soup",
    timings: {
        prep: "20 min",
        cook: "90 min",
    },
    icons: ["gluten-free"],
    servings: 4,
    description: "This thick and hearty soup can easily be adjusted from a mild tingle to a definite zing by " +
        "around with the amount of harissa.  Any way you make it, it's a solid, filling meal.",
    steps: [{
        ingredients: [
            { amount: 1, unit: "lb", item: "lamb (in bite-sized pieces)" },
            { amount: 2, unit: "tbsp", item: "olive oil" },
        ],
        directions: "Add the oil to a large, cast-iron skillet on medium-high heat. Brown the lamb in batches and " +
            "set aside. Add more oil as needed."
    }, {
        ingredients: [
            { amount: 1, item: "onion" },
            { amount: 3, unit: "cloves", item: "garlic" },
        ],
        directions: "Add the onion and garlic and cook until just starting to brown."
    }, {
        ingredients: [
            { amount: 5, unit: "cups", item: "water" },
            { amount: 14, unit: "oz", item: "tomatoes (diced)" },
            { amount: 2, unit: "tbsp", item: "harissa" },
            { amount: 1, item: "bay leaf" },
            { amount: 1/2, unit: "tsp", item: "thyme" },
            { amount: 1/2, unit: "tsp", item: "oregano" },
            { amount: 1/8, unit: "tsp", item: "cinnamon" },
            { amount: 1/4, unit: "tsp", item: "cumin" },
            { amount: 1/4, unit: "tsp", item: "tumeric" },
        ],
        directions: "Add the water and return the meat to the pan. Bring to a boil, and skim off any foam which " +
            "arises. Reduce the heat and add: tomatoes, spices, and harissa.  Boil until tender, and then discard " +
            "the bay leaf. (about 1 hour)"
    }, {
        ingredients: [
            { amount: 14, unit: "oz", item: "garbanzo beans (cooked)" },
            { amount: 1, item: "carrot (diced)" },
            { amount: 1, item: "potato (diced)" },
            { amount: 1, item: "zucchini (diced)" },
            { amount: 3+1/2, unit: "oz", item: "peas (frozen)" },
        ],
        directions: "Stir in the garbanzo beans, carrots, and potatos and simmer for 15 min. Add the zucchini and " +
            "peas, and continue simmering until all the vegetables are soft. (about 30 min total)"
    }, {
        ingredients: [
            { amount: 4, unit: "leaves", item: "mint" }
        ],
        directions: "Adjust the seasoning, adding more harissa to taste. Serve and garnish with mint."
    }]
})
