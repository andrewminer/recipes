module.exports = require("../helpers")({
    title: "French Onion Soup",
    timings: {
        prep: "15 min",
        cook: "80 min",
    },
    icons: [],
    servings: 6,
    description: "This ultimate version of the bistro classic is made with homemade beef broth and caramelized " +
        "onions. Aged Gruyére is key to getting the traditional bubbling crust of cheese; it's rich smooth, and " +
        "melts easily.",
    steps: [{
        ingredients: [
            { amount: 2, unit: "oz", item: "butter (unsalted)" },
            { amount: 4, item: "onions (large, yellow)" },
            { item: "salt & pepper" },
        ],
        directions: "Melt the butter in a 4-quart pot over medium heat. Add the onions, salt, and pepper. Reduce the " +
            "heat to low. Press a piece of foil over the onions, then cover and cook until the onions are very soft, " +
            "but not falling apart (about 50 min)."
    }, {
        ingredients: [
            { amount: 1, unit: "", item: "loaf french bread (½lb), cut in ½\" slices" },
            { amount: 1, unit: "oz", item: "butter" },
        ],
        directions: "While the onions cook, position a rack in the center of the oven and preheat to 350°F. Butter " +
            "a rimmed baking sheet and add the slices of baguette in a single layer. Bake until browned and crisp, " +
            "turning once to get both sides (15–20 min)."
    }, {
        ingredients: [
            { amount: 1, unit: "tsp", item: "sugar (white)" },
        ],
        directions: "Once the onions have finished cooking, add sugar, and raise heat to medium-high. Cook until " +
            "browned (10–15 min)."
    }, {
        ingredients: [
            { amount: 8, unit: "cups", item: "beef broth" },
            { amount: 1, unit: "", item: "bay leaf" },
        ],
        directions: "Add the broth and bay leaf to the onions and bring to a boil. Reduce to a simmer for 10 " +
            "minutes, and then discard the bay leaf. Add salt and pepper to taste."
    }, {
        ingredients: [
            { amount: 2, unit: "cups", item: "Gruyére cheese (shredded)" },
        ],
        directions: "When ready to serve, place 6 broiler-safe bowls on a cooking sheet. Place 2–3 slices of bread " +
            "at the bottom of each bowl and ladle hot soup over the top. Sprinkle with shredded cheese and broil " +
            "until browned and bubbling (2–5 min)."
    }],
    credit: {
        name: "Fine Cooking",
        url: "http://www.finecooking.com/recipe/classic-french-onion-soup"
    }
})
