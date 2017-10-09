module.exports = require("../helpers")({
    title: "Tzatziki",
    timings: {
        prep: "10 min",
        cook: "20 min",
    },
    icons: ["gluten-free", "low-carb"],
    servings: 3,
    description: "Tzatziki has a creamy tartness with just a tiny bit of crunch from the cucumber. It makes a great " +
        "accompaniment to spicy strong dishes to help cool things off. We always serve this with Kofta",
    steps: [{
        ingredients: [
            { amount: 1, unit: "", item: "cucumber" },
        ],
        directions: "Peel the cucumber and remove all the seeds. Dice into ¼” cubes."
    }, {
        ingredients: [
            { amount: 1, unit: "cup", item: "greek yogurt" },
            { amount: 2, unit: "cloves", item: "garlic (minced)" },
            { amount: 2, unit: "tbsp", item: "dill (chopped)" },
            { amount: 1, unit: "tbsp", item: "lemon juice" },
            { amount: 1, unit: "tsp", item: "lemon zest" },
            { amount: 1, unit: "tsp", item: "salt" },
            { amount: 1/2, unit: "tsp", item: "black pepper" },
        ],
        directions: "Combine all the ingredients with the cucumber and mix. Place in the refrigerator for at least " +
            "20 min to chill."
    }]
})
