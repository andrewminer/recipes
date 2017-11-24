module.exports = require("../helpers")({
    title: "Bourbon Glazed Carrots",
    timings: {
        prep: "10 min",
        cook: "20 min",
    },
    icons: ["gluten-free", "vegetarian"],
    servings: 4,
    description: "These carrots are come with a thick, syrupy sauce which is delicious, but definitely not " +
        "low-calorie!",
    steps: [{
        ingredients: [
            { amount: 2, unit: "lbs", item: "carrots" },
        ],
        directions: "Cut carrots into bite-sized pieces and place in a medium pot with enough water to cover " +
            "completely.  Bring to a boil, and cook until soft."
    }, {
        ingredients: [
            { amount: 1/4, unit: "cup", item: "butter" },
            { amount: 1/4, unit: "cup", item: "brown sugar" },
            { amount: 2, unit: "tbsp", item: "bourbon" },
        ],
        directions: "When the carrots are finished, drain and set aside. Combine the butter, sugar, and boubon in " +
            "same pot and heat on medium until thickened. Return the carrots to the pot and mix."
    }],
    credit: {
        name: "Flipper",
        url: "http://allrecipes.com/recipe/229583/bourbon-glazed-carrots/"
    }
})
