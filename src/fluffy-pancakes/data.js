module.exports = require("../helpers")({
    title: "Fluffy Pancakes",
    timings: {
        prep: "10 min",
        cook: "5 min",
    },
    icons: ["vegetarian"],
    servings: 2,
    description: "These are the fluffiest, thickest, most delicious pancakes I've ever had. The batter should wind " +
        "up very, very thick, so don't be surprised if it's more the consistency of yogurt rather than cream.",
    steps: [{
        ingredients: [
            { amount: 3/4, unit: "cups", item: "milk" },
            { amount: 1, unit: "tbsp", item: "white vinegar" },
        ],
        directions: "Combine the milk and vinegar in a medium bowl and set aside to sour."
    }, {
        ingredients: [
            { amount: 1, unit: "cup", item: "all-purpose flour" },
            { amount: 2, unit: "tbsp", item: "white sugar" },
            { amount: 1, unit: "tsp", item: "baking powder" },
            { amount: 1/2, unit: "tsp", item: "baking soda" },
            { amount: 1/2, unit: "tsp", item: "salt" },
        ],
        directions: "Combine the dry ingredients in a medium bowl and whisk together throughly."
    }, {
        ingredients: [
            { amount: 2, unit: "tbsp", item: "butter" },
            { amount: 1, unit: "", item: "egg" },
        ],
        directions: "Melt the butter in a small dish, and then whisk it and the egg into the wet ingredients. Then, " +
            "slowly add the dry ingredients a little at a time, stopping to whisk each small portion in completely " +
            "before adding any more."
    }, {
        directions: "Heat a large skillet over medium heat (300°F for an electric skillet). Scoop ¼ cup of the " +
            "batter at a time to form each pancake. Cook each until bubble just start to form around the edges " +
            "and then turn them over. Remove from the heat after lightly browned."
    }]
})
