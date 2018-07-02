
module.exports = require("../helpers")({
    title: "Keto Pork Ribs",
    timings: {
        prep: "10 min",
        cook: "12 hours",
    },
    icons: ["gluten-free", "low-carb", "overnight"],
    servings: 8,
    description: "Most BBQ pork ribs are covered in sticky sweet sauce mostly made up of brown sugar and spices. " +
        "This obviously does not work for a ketogenic diet. This recipe substitutes the sweet sauce for a tangy " +
        "mustard-based sauce for a very tasty alternative.",
    steps: [{
        ingredients: [
            { amount: 2, unit: "tbsp", item: "paprika" },
            { amount: 2, unit: "tbsp", item: "splenda" },
            { amount: 1, unit: "tbsp", item: "garlic powder" },
            { amount: 1, unit: "tbsp", item: "salt" },
            { amount: 1/2, unit: "tbsp", item: "black pepper" },
            { amount: 1/2, unit: "tbsp", item: "ground ginger" },
            { amount: 1/2, unit: "tbsp", item: "onion powder" },
            { amount: 1/4, unit: "tbsp", item: "cayenne pepper" }
        ],
        directions: "Mix all the dry spices together in a small bowl."
    }, {
        ingredients: [
            { amount: 2, unit: "racks", item: "pork ribs (about 6 lbs)" },
            { amount: 2, unit: "oz", item: "dijon mustard" }
        ],
        directions: "Cut the ribs into 4-rib segments and spread a small dollop of mustard over the top of each one. " +
            "Dust each with the spice mixture until all used up."
    }, {
        directions: "Seal each segment of ribs in a sous vide bag, and drop them all into a sous vide bath at 160°F " +
            "overnight."
    }, {
        directions: "Unpack each bag and lay the ribs out on a cooking sheet. Place under a broiler on the highest " +
            "setting until a crusty brown bark begins to form. This will happen at a different rate for each piece, " +
            "so you'll need to watch them carefully!"
    }]
})
