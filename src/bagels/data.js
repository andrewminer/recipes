module.exports = require("../helpers")({
    title: "Bagels",
    timings: {
        prep: "50 min",
        cook: "90 min",
    },
    icons: ["vegetarian"],
    servings: 8,
    description: "This recipe produces a perfect NY bagel (once you've gotten the hang of it). Chewy on the outside, " +
        "soft on the inside, and just the right size. The only downside is that it's really something of an all-day " +
        "process.",
    steps: [{
        ingredients: [
            { amount: 1.25, unit: "cup", item: "water (~ 115°F)" },
            { amount: 1.25, unit: "tbsp", item: "sugar (granulated)" },
            { amount: 1.25, unit: "tsp", item: "yeast (active dry)" },
        ],
        directions: "Add the sugar and yeast to the warm water and set aside without stirring. Leave it to rest " +
            "while you proceed with the next steps."
    }, {
        ingredients: [
            { amount: 500, unit: "g", item: "flour (all purpose)" },
            { amount: 0.25, unit: "cup", item: "water (~ 115°F)" },
            { amount: 1.5, unit: "tsp", item: "salt" },
        ],
        directions: "Mix the flour and salt in a large mixing bowl. Make a small depression in the center of the " +
            "flour and gently pour in the yeast mixture. Mix until you produce a moist but firm dough, adding in " +
            "more water a tbsp at a time as needed to keep it from drying out."
    }, {
        ingredients: [
            { amount: 25, unit: "g", item: "flour (all purpose)" },
        ],
        directions: "On a lightly floured surface, kneed the dough until it is smooth and elastic, while working in " +
            "enough flour to make the dough somewhat stiff."
    }, {
        ingredients: [
            { amount: 1, unit: "tsp", item: "olive oil" },
        ],
        directions: "Very lightly coat the dough with olive oil, place into a bowl, and cover with a damp towel. " +
            "Allow to rise a warm place until the dough has doubled in size (about an hour)."
    }, {
        ingredients: [],
        directions: "Fill a large pot with water about 3\" deep and bring to a boil. Preheat your oven to 425°F. " +
            "While these things are in progress, divide the dough into 8 equal portions using a scale. Shape each " +
            "portion into a ball. With a flour-coated finger, poke a hole in the ball and form into a bagel shape."
    }, {
        ingredients: [
            { amount: 2, unit: "", item: "egg" },
            { unit: "~", item: "coarse salt, caraway seeds, fennel seeds, poppy seeds, etc." },
        ],
        directions: "Reduce the water to a simmer. Using a slotted spoon, drop each bagel in the water and boil for " +
            "1-2 min on each side (longer for a chewier bagel). When finished, place the bagels on a lightly-oiled " +
            "cooking sheet. Coat each bagel with an egg wash and add sprinkle on your favorite toppings."
    }, {
        ingredients: [],
        directions: "Bake until golden brown and the toppings just start to singe. Cool on a drying rack."
    }]
})
