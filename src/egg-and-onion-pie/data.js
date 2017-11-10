module.exports = require("../helpers")({
    title: "Egg & Onion Pie",
    timings: {
        prep: "20 min",
        cook: "40 min",
    },
    icons: ["gluten-free", "low-carb", "vegetarian"],
    servings: 4,
    description: "Egg and Onion Pie is served as a appetizer at Colonial Williamsburg in Virgina. Outwardly, it " +
        "strongly resembles a quiche, but it actually winds up being quite a bit sweeter and composed in multiple " +
        "layers with the onions on the bottom.",
    steps: [{
        ingredients: [
            { amount: 2, unit: "tbsp", item: "butter (unsalted)" },
            { amount: 2, unit: "", item: "yellow onions" },
        ],
        directions: "In a heavy skillet, over a medium heat, melt the butter.  Then add the onions, reduce the heat " +
            "and cook until golden and soft. Then transfer to a small bowl to cool. (about 20 min)"
    }, {
        ingredients: [
            { amount: 2, unit: "", item: "eggs" },
            { amount: 2, unit: "", item: "egg yolks" },
            { amount: 1, unit: "cup", item: "milk (whole)" },
            { amount: 1/2, unit: "cup", item: "cream" },
            { amount: 1, unit: "tbsp", item: "chives" },
            { amount: 1, unit: "tbsp", item: "parsley" },
            { unit: "~", item: "salt and pepper" },
        ],
        directions: "In a small bowl, beat the eggs, egg yolks, milk, cream, chives, parsley, salt, and pepper. " +
            "<br><br>Evenly layer the onions in the bottom of an oven-safe pie dish, and then gently pour over the " +
            "egg mixture. Bake at 400°F until the filling is browned and just set. (about 30 min) Allow to cool for " +
            "10 minutes before serving."
    }],
    credits: {
        name: "",
        url: ""
    }
})
