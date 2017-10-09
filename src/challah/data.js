module.exports = require("../helpers")({
    title: "Challah",
    timings: {
        prep: "35 min",
        cook: "3 hours",
    },
    icons: ["vegetarian"],
    servings: 16,
    description: "Challah is a light, rich bread traditionally served as part of Jewish Friday night sabbath dinner. " +
        "This recipe produces two loaves in a simple three-strand braid. You can increase the number of braids for " +
        "firmer bread with more crust.",
    steps: [{
        ingredients: [
            { amount: 1.5, unit: "packets", item: "active dry yeast" },
            { amount: 1, unit: "tbsp", item: "sugar" },
            { amount: 1+1/3, unit: "cups", item: "water (115°F)" },
        ],
        directions: "In a mixing large bowl, dissolve the yeast and sugar in the water. Do not stir, but set aside " +
            "to allow it to mix until the top turns foamy (about 5 min). While this is happening, preheat the oven " +
            "to its lowest setting."
    }, {
        ingredients: [
            { amount: 1/2, unit: "cup", item: "olive oil" },
            { amount: 5, unit: "", item: "eggs" },
            { amount: 1/2, unit: "cup", item: "sugar" },
            { amount: 1, unit: "tbsp", item: "salt" },
        ],
        directions: "Using a whish attachment in a standing mixer, add the olive oil, eggs, sugar and salt one at a " +
            "time, allowing each to be mixed fully before adding the next."
    }, {
        ingredients: [
            { amount: 8, unit: "cups", item: "all-purpose flour" },
        ],
        directions: "Switch to a blade attachment, and slowly add the flour about a ¼ cup at a time, allowing each " +
            "new addition to be completely mixed before adding the next. Continue mixing until the dough forms a " +
            "single ball (5-10 min). The switch to a dough hook, and continue to kneed until the dough is smooth " +
            "an elastic."
    }, {
        directions: "On a lightly floured surface, knead the dough by hand until smooth and completely integrated " +
            "into a single ball. Place this into a bowl which is much larger than the dough ball and cover with a " +
            "damp towel. Turn off the oven, and put the bowl inside to rise. The dough should roughly double in " +
            "size over the course of an hour. Then punch down the dough, re-form into a ball, place return to the " +
            "oven to rise again for about 30 min."
    }, {
        directions: "Divide the dough into six equal portions. Roll each one out into a strand about 12\" long and " +
            "1½\" in diameter. Braid three at a time into two loaves, taking care to pinch the ends together " +
            "firmly. Place both loaves on a baking sheet covered with parchment paper and place into the " +
            "refrigerator to rise again for about an hour.  Pre-heat the oven to 375°F."
    }, {
        ingredients: [
            { amount: 1, unit: "", item: "egg" },
            { amount: 1, unit: "tsp", item: "milk (whole)" },
            { amount: 1, unit: "tbsp", item: "caraway seeds" },
        ],
        directions: "Mix the egg and milk in a small bowl. Brush the mixture over the two loaves of bread, and then " +
            "sprinkle the caraway seeds over the top. Pop them into the oven and bake until the tops are golden " +
            "brown (about 20-30 min)."
    }]
})
