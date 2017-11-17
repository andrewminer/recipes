module.exports = require("../helpers")({
    title: "Creamed Spinach",
    timings: {
        prep: "5 min",
        cook: "15 min",
    },
    icons: ["gluten-free", "vegetarian"],
    servings: 5,
    description: "Both tasty and simple to make, this recipe is a great way to add a little green to any meal.",
    steps: [{
        ingredients: [
            { amount: 40, unit: "oz", item: "frozen spinach" },
        ],
        directions: "In a medium stock pot, heat the frozen spinach on a low heat. Once defrosted, squeeze the " +
            "spinach dry, reserving about a half cup of the liquid and setting the spinach aside."
    }, {
        ingredients: [
            { amount: 1.5, unit: "cups", item: "whole milk" },
            { amount: 3, unit: "tbsp", item: "butter" },
            { amount: 3, unit: "tbsp", item: "flour" },
            { amount: 3, unit: "cloves", item: "garlic (minced)" },
        ],
        directions: "Melt the butter in now-empty stock pot. When foaming, add the garlic and cook until softened " +
            "and browned. Pour in the milk, and slowly add the flour: whisking constantly until smooth and steaming."
    }, {
        ingredients: [
            { amount: 1/2, unit: "cup", item: "parmesean cheese (grated)" },
            { amount: 1, unit: "tsp", item: "nutmeg" },
            { amount: 1, unit: "tsp", item: "salt" },
            { amount: 1, unit: "tsp", item: "black pepper" },
        ],
        directions: "Add the spinach and reserved water back into the stock pot along with the remaining " +
            "ingredients. Cook until heated through and serve."
    }],
})
