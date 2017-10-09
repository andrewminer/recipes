module.exports = require("../helpers")({
    title: "Kofta Kebabs",
    timings: {
        prep: "20 min",
        cook: "30 min",
    },
    icons: ["gluten-free", "low-carb"],
    servings: 3,
    description: "Kofta is really a form of sausage, but what a sausage! The recipe started as long, skinny kebabs, " +
        "but we've found it more convenient to make it as meatballs. Whichever way, they go fast! We always pair " +
        "them with Tzatziki, which you can make while the meat chills.",
    steps: [{
        ingredients: [
            { amount: 1, unit: "", item: "onion (yellow)" },
        ],
        directions: "Roughly chop the onion into eights and purée in a blender."
    }, {
        ingredients: [
            { amount: 2, unit: "lbs", item: "lamb (ground)" },
            { amount: 4, unit: "stems", item: "parsley (minced)" },
            { amount: 3, unit: "cloves", item: "garlic (minced)" },
            { amount: 5, unit: "leaves", item: "mint (minced)" },
            { amount: 1, unit: "tsp", item: "white pepper (ground)" },
            { amount: 1, unit: "tsp", item: "cumin (ground)" },
            { amount: 1, unit: "tsp", item: "salt" },
            { amount: 1, unit: "tsp", item: "red pepper flakes" },
            { amount: 1/2, unit: "tsp", item: "coriander (ground)" },
            { amount: 1/4, unit: "tsp", item: "cloves (ground)" },
        ],
        directions: "In a large mixing bowl, knead the meat until reduced to a somewhat sticky mass of completely " +
            "homogeneous paste. Mix in the onion purée, herbs, and spices and knead until completely mixed. Cover " +
            "and refrigerate for 20 min."
    }, {
        ingredients: [
            { amount: 1, unit: "tbsp", item: "olive oil" },
        ],
        directions: "Cover a cooking sheet with tin foil and coat your hands with olive oil. Roll out the meat into " +
            "meatballs about 2-3” in diameter. Place in on the cooking sheet in a single layer leaving a little " +
            "room between each one. Cook at 400°F until they reach 140°F in the center."
    }]
})
