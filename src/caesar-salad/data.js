module.exports = require("../helpers")({
    title: "Caesar Salad",
    timings: {
        prep: "9 min",
        cook: "30 min",
    },
    icons: ["gluten-free", "low-carb"],
    servings: 4,
    description: "This traditional favorite salad recipe has been adjusted to fit the tastes of my family who tend " +
        "to like a lot more garlic than most people.",
    steps: [{
        ingredients: [
            { amount: 5, unit: "tsp", item: "garlic (minced)" },
            { amount: 2, unit: "tsp", item: "lemon juice" },
            { amount: 1, unit: "tsp", item: "anchovy paste" },
            { amount: 1, item: "egg" },
        ],
        directions: "Combine the egg, lemon juice, anchovy paste, and garlic in a large bowl and whisk vigorously " +
            "until all the ingredients are completely mixed."
    }, {
        ingredients: [
            { amount: 6, unit: "tbsp", item: "olive oil" },
        ],
        directions: "Add the olive oil a little at a time, whisking just enough to mix, but still avoiding trapping " +
            "a lot of air in the process."
    }, {
        ingredients: [
            { amount: 2, unit: "heads", item: "romaine lettuce" },
        ],
        directions: "Chop the romaine into bite-sized pieces. Roll the dressing around in the bowl until it coats " +
            " the sides, and then drop in the lettuce. Toss until the dressing has been fully mixed."
    }, {
        ingredients: [
            { amount: 1/3, unit: "cup", item: "parmesean (freshly grated)" },
        ],
        directions: "Sprinkle the parmesean cheese over the salad. If so desired, chill in the refrigerator for 30 " +
            "minutes before serving."
    }]
})
