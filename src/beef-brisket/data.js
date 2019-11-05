module.exports = require("../helpers")({
    title: "Beef Brisket",
    timings: {
        prep: "10 min",
        cook: "3 hours",
    },
    icons: ["gluten-free"],
    servings: 6,
    description: "This is the classic beef brisket my Jewish grandmother would serve us every Passover.",
    steps: [{
        ingredients: [
            { amount: 4, unit: "lb", item: "beef brisket" }
        ],
        directions: "In a large Dutch oven, sear the brisket on all sides over a medium-high heat until uniformly " +
            "browned on all sides."
    }, {
        ingredients: [
            { amount: 1+1/2, unit: "cup", item: "grape jelly" },
            { amount: 1, unit: "cup", item: "water" },
            { amount: 1/2, unit: "cup", item: "ketchup" },
            { amount: 1/2, unit: "cup", item: "vinegar" },
            { amount: 2, item: "onions (yellow)" },
            { amount: 1, unit: "tbsp", item: "garlic (minced)" },
            { amount: 1, unit: "tbsp", item: "salt" }
        ],
        directions: "Stir in the remaining ingredients. Cover and allow to simmer until the brisket is tender and " +
            "pulls apart easily with a fork (2–3 hours)."
    }, {
        directions: "Allow the brisket to cool, and then slice against the grain of the meat. Lay out the slices in " +
            "a 9x13\" dish and smother with the remaining gravy."
    }],
    credit: {
        name: "Louise",
        url: "https://www.allrecipes.com/recipe/212741/jewish-style-sweet-and-sour-brisket/"
    }
})
