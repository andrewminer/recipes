module.exports = require("../helpers")({
    title: "Chicken Parmesan",
    timings: {
        prep: "15 min",
        cook: "30 min",
    },
    icons: [],
    servings: 6,
    description: "A delicious Italian breaded chicken smothered with cheese and tomato-based pasta sauce!",
    steps: [{
        ingredients: [
            { amount: 6, item: "chicken breasts (skinless, boneless)" },
            { amount: 2, item: "eggs" },
            { amount: 1, unit: "cup", item: "Parmesean cheese (finely grated)" },
            { amount: 7, unit: "oz", item: "bread crumbs (very finely crumbled)" },
        ],
        directions: "Pour beaten eggs into a shallow dish. Mix the bread crumbs and cheese in another shallow dish. " +
            "After washing and drying the chicken breasts, dredge them first in the egg, and then in the bread crumb " +
            "mixture. Place aside on parchment paper."
    }, {
        ingredients: [
            { amount: 2, unit: "tbsp", item: "vegetable oil" },
        ],
        directions: "In a large skillet, heat oil over medium-high heat. When hot, add the chicken and saute until " +
            "golden brown on both sides and the chicken is cooked through (about 8–10 minutes per side)."
    }, {
        ingredients: [
            { amount: 12, unit: "oz", item: "pasta sauce" },
            { amount: 6, unit: "slices", item: "Monterey Jack cheese" },
        ],
        directions: "Pour tomato sauce into an oven-safe dish just big enough to hold the chicken. Place the chicken " +
            "on top of the sauce, and place a slice of cheese over each breast. Cook at 375°F until the cheese has " +
            "melted and just started to brown (about 20 minutes)."
    }],
    credit: {
        name: "vero_cn81",
        url: "https://www.allrecipes.com/recipe/9044/tomato-chicken-parmesan"
    }
})
