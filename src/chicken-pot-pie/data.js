module.exports = require("../helpers")({
    title: "Chicken Pot Pie",
    timings: {
        prep: "25 min",
        cook: "10 min",
    },
    icons: ["gluten-free"],
    servings: 4,
    description: "This recipe produce a sumptous filling for a chicken pot pie, delightfully tinged with dry sherry " +
        "for a unique flavor.",
    steps: [{
        ingredients: [
            { amount: 4, unit: "tbsp", item: "butter" },
            { amount: 1, unit: "", item: "onion (yellow, diced)" },
            { amount: 1, unit: "", item: "celery stalk (diced)" },
            { amount: 2, unit: "", item: "carrots (thinly sliced)" },
        ],
        directions: "Melt the butter in a large cast-iron pan. Then add the vegetables, salt and pepper and cook " +
            "until soft."
    }, {
        ingredients: [
            { amount: 1, unit: "tsp", item: "tomato paste" },
            { amount: 1, unit: "tsp", item: "thyme (dried)" },
        ],
        directions: "Stir in the tomato paste and thyme and cook until browned."
    }, {
        ingredients: [
            { amount: 1/3, unit: "cup", item: "gluten-free flour" },
        ],
        directions: "Stir in the flour and cook until golden."
    }, {
        ingredients: [
            { amount: 2, unit: "cup", item: "chicken broth (or bouillon)" },
        ],
        directions: "Slowly whisk in the chicken broth and continue to mix until a smooth sauce has formed."
    }, {
        ingredients: [
            { amount: 1+1/2, unit: "lbs", item: "chicken thighs (chopped)" },
        ],
        directions: "Add the chicken and cook covered until the chicken is cooked all the way through (about 10 min)."
    }, {
        ingredients: [
            { amount: 1/2, unit: "cup", item: "peas (frozen)" },
            { amount: 1/4, unit: "cup", item: "heavy cream" },
            { amount: 3, unit: "tbsp", item: "parsley (fresh, minced)" },
            { amount: 1, unit: "tbsp", item: "sherry (dry)" },
        ],
        directions: "Stir in the peas, heavy cream, and sherry. Cook until heated through and simmering again. " +
            "Serve either in bowls as it is, or poured over biscuits, or baked into a pie crust."
    }]
})