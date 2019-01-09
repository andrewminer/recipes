module.exports = require("../helpers")({
    title: "Chicken Pastries",
    timings: {
        prep: "15 min",
        cook: "30 min",
    },
    icons: [],
    servings: 4,
    description: "",
    steps: [{
        ingredients: [
            { amount: 4, item: "chicken breasts" },
            { amount: 4, unit: "tbsp", item: "butter" },
            { item: "salt & pepper" },
        ],
        directions: "Preheat the oven to 375°F. Place the chicken in an oven-safe pan and cover with small slices of " +
            "butter. Season with salt and pepper to taste. Cover with aluminum foil and place in the oven. Cook " +
            "until the chicken breasts have reached 160°F in the centers (about 20 min)."
    }, {
        directions: "Remove the chicken from the oven and allow to cool slightly. Then pull the chicken apart into " +
            "shreds."
    }, {
        ingredients: [
            { amount: 5, unit: "oz", item: "Boursin Garlic & Herb cheese" },
            { amount: 16, unit: "", item: "crescent roll dough wedges" },
        ],
        directions: "Cover a cookie sheet with aluminum foil. Working on at a time, take the crescent roll dough and " +
            "stretch it slightly until it is roughly an equilateral triangle. Place a teaspoon of cheese in the " +
            "center, and then about ¾oz of chicken. This should form a small lump in the center of the dough. Then " +
            "fold up the corners over the center, and pinch any remaining openings closed. Place each pastry on the " +
            "cookie sheet."
    }, {
        directions: "Place the cookie sheet in the oven and cook until the tops of the pastries have turned golden " +
            "brown (anywhere from 8–12 minutes, depending upon your oven)."
    }],
    credit: {
        name: "Lynne Miner"
    }
})
