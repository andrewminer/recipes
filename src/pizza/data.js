module.exports = require("../helpers")({
    title: "Pizza",
    timings: {
        prep: "2-3 days",
        cook: "10 min",
    },
    icons: ["overnight", "vegetarian"],
    servings: 12,
    description: "This recipe will give you a classic NY-style pizza, but a huge part of the final result is going " +
        "to come down to the quality of tomato sauce, cheese and toppings you choose... so choose wisely!",
    steps: [{
        ingredients: [
            { amount: 500, unit: "g", item: "water (110°F–115°F)" },
            { amount: 3.5, unit: "g", item: "instant dry yeast" },
            { amount: 8, unit: "g", item: "sugar" },
        ],
        directions: "Add the yeast and sugar to the water without stirring and wait about 5 minutes."
    }, {
        ingredients: [
            { amount: 800, unit: "g", item: "bread flour (King Arthur's)" },
            { amount: 16, unit: "g", item: "salt" },
        ],
        directions: "Stir the yeast mixture. In a separate bowl, combine the salt and flour. Gradually incorporate " +
            "the flour mixture into the water until fully mixed."
    }, {
        ingredients: [
            { amount: 3, unit: "tsp", item: "olive oil" },
        ],
        directions: "Add the oil and knead the dough, ensuring that the dough ends up between 75°F–80°F.  Divide the" +
            "dough into 3 equal portions and store in the refrigerator in an oiled ziploc bag. It should be allowed " +
            "to rise slowly over 2–3 days before use. Freeze if not used in that time."
    }, {
        directions: "Preheat a pizza stone in the oven to 550°F (this can take up to an hour)."
    }, {
        directions: "Open up each portion of dough as described <a href='https://youtu.be/GtAeKM_f2WU'>here</a>, " +
            "taking care not to de-gas the crust. Finish by spreading the dough on two overlapping pieces of " +
            "parchment paper dusted with flour."
    }, {
        ingredients: [
            { amount: 6, unit: "cups", item: "tomato purée (2 per pizza)" },
            { amount: 12, unit: "oz", item: "mozzerella cheese, shredded (4 per pizza)" },
        ],
        directions: "Apply sauce, cheese, and your preferred toppings to each of the pizzas.  Then, carefully slide " +
            "the parchment paper with one pizza onto the hot stone, and then slide the parchment paper away, leaving " +
            "the dough directly on the stone.  Return to the oven and bake until the cheese is bubbling and the " +
            "crust begins to turn golden brown (4–6 min). Repeat for the remaining pizzas."
    }]
})
