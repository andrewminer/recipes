module.exports = require("../helpers")({
    title: "Pommes Purée",
    timings: {
        prep: "25 min",
        cook: "20 min",
    },
    icons: ["gluten-free", "vegetarian"],
    servings: 6,
    description: "These are the most superb mashed potatoes I've ever experienced. Completely smooth, indescribably " +
        "rich, and perfectly creamy, these potatoes are well worth pulling the food processor out of the cupboard.",
    steps: [{
        ingredients: [
            { amount: 2, unit: "lb", item: "yukon potatoes" },
        ],
        directions: "Peel and chop the potatoes into 1” cubes. Rise and set aside to drain."
    }, {
        ingredients: [
            { amount: 1+1/3, unit: "cups", item: "whole milk (+ a little extra)" },
            { amount: 20, unit: "tbsp", item: "butter" },
            { amount: 2, unit: "tsp", item: "salt" },
        ],
        directions: "In a stock pot, melt the butter over medium heat.  Once completely melted, add the milk and " +
            "salt and continue to heat until steaming. Finally, add the potatoes and simmer over very low heat " +
            "until the potatoes are soft. (about 20 min)"
    }, {
        directions: "Drain the potatoes while retaining the liquid. Clean out the stock pot and return the liquid. " +
            "Using the purée blade on a food processor, purée the potato pieces and return them to the stock pot as " +
            "well."
    }, {
        directions: "Re-combine thoroughly, adding just enough milk to make them <i>almost</i> pourable (like a " +
            "thick pudding), and bring back to temperature."
    }],
    credit: {
        name: "Joël Robuchon",
        url: "http://www.foodandwine.com/recipes/pommes-puree"
    }
})
