module.exports = require("../helpers")({
    title: "Eggnog",
    timings: {
        prep: "15 min",
    },
    icons: ["gluten-free", "low-carb", "vegetarian"],
    servings: 6,
    description: "This makes a very lovely, rich eggnog (with or without the alcohol), but you'll definitely want a " +
        "mixer for it!",
    steps: [{
        ingredients: [
            { amount: 4, unit: "", item: "eggs" },
        ],
        directions: "In a mixer bowl, beat the egg yolks until the lighten in color. Set aside the whites for later."
    }, {
        ingredients: [
            { amount: 1/3, unit: "cup", item: "sugar (white)" },
            { amount: 2, unit: "cups", item: "milk (whole)" },
            { amount: 1, unit: "cup", item: "heavy cream" },
            { amount: 3, unit: "oz", item: "bourbon" },
            { amount: 1, unit: "tsp", item: "nutmeg (ground)" },
        ],
        directions: "Turn the mixer on low, and gradually add the sugar while beating until it is fully dissolved. " +
            "Stop the mixer and add the milk, cream, bourbon, and nutmeg. Stir well to combine."
    }, {
        ingredients: [
            { amount: 1, unit: "tbsp", item: "sugar (white)" },
        ],
        directions: "Using a mixer, but with a separate bowl, beat the egg whites until they form soft peaks. " +
            "Gradually add the sugar while the mixer is still running until stiff peaks form."
    }, {
        directions: "Mix the two bowls together, stirring to combine them fully. Chill before serving."
    }],
    credit: {
        name: "Alton Brown",
        url: "https://www.foodnetwork.com/recipes/alton-brown/eggnog-recipe2-2013745"
    }
})
