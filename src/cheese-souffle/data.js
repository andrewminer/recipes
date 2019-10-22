module.exports = require("../helpers")({
    title: "Cheese Soufflé",
    timings: {
        prep: "20 min",
        cook: "35 min",
    },
    icons: ["gluten-free", "vegetarian"],
    servings: 4,
    description: "This cheese soufflé turns out a fluffy, slightly salty, cheese delight!",
    steps: [{
        ingredients: [
            { amount: 2, unit: "tbsp", item: "parmesean cheese" },
            { item: "olive oil spray" },
        ],
        directions: "Adjust oven rack to the middle position pre-heat to 350°F. Spray an 8in soufflé dish with a " +
            "light coating of oil, and then sprinkle with parmesean cheese."
    }, {
        ingredients: [
            { amount: 1/4, unit: "cup", item: "flour (white, all-purpose)" },
            { amount: 1/4, unit: "tsp", item: "paprika" },
            { amount: 1/4, unit: "tsp", item: "salt" },
            { amount: 1/8, unit: "tsp", item: "cayenne pepper" },
            { amount: 1/8, unit: "tsp", item: "white pepper" },
            { amount: 1, unit: "pinch", item: "nutneg" },
            { amount: 4, unit: "tbsp", item: "butter (unsalted)" },
            { amount: 1 + 1/3, unit: "cup", item: "milk (whole)" },
        ],
        directions: "Combine the flour, salt, and spices in a bowl. Melt the butter in a saucepan over medium-high " +
            "heat.  Stir in the flour mixture and cook until golden.  Slowly pour in the milk while whisking slowly " +
            "and bring to a simmer.  Cook, whiskly constantly, until the thickened and smooth."
    }, {
        ingredients: [
            { amount: 6, unit: "oz", item: "Gruyère cheese" },
            { amount: 5, unit: "tbsp", item: "parmesean cheese" },
        ],
        directions: "Remove the saucepan from the heat and mix in the cheese until melted and smooth (about 5min). " +
            "Let cool for about 10min."
    }, {
        ingredients: [
            { amount: 6, item: "egg yolks" },
            { amount: 1+1/2, unit: "tsp", item: "parsley (minced)" },
        ],
        directions: "Whisk in the egg yolks and parsley."
    }, {
        ingredients: [
            { amount: 6, item: "egg whites" },
            { amount: 1/4, unit: "tsp", item: "cream of tartar" },
        ],
        directions: "Using a standing mixer with a whisk, whip the egg whites and cream of tartar on medium-low " +
            "foamy (about 1min).  Increase to medium-high speed, and whip until stiff peaks form (3–4min). Add " +
            "cheese mixture and continue to whip until fully combined (15sec)."
    }, {
        ingredients: [
            { amount: 1, unit: "tbsp", item: "parmesean cheese" },
            { amount: 1/2, unit: "tsp", item: "parsley (minced)" },
        ],
        directions: "Pour the mixture into the soufflé dish and sprinkle with remaining parmesean cheese. Bake until " +
            "risen well above the edge of the dish with a golden-brown top and an interior temperature of at least " +
            "170°F (30–35min). Sprinkle the parsley on top."
    }],
    credit: {
        name: "Cook's Illustrated",
        url: "https://www.cooksillustrated.com/recipes/7670"
    }
})
