module.exports = require("../helpers")({
    title: "Roast Fowl",
    timings: {
        prep: "10 min",
        cook: "2-5 hours",
    },
    icons: ["gluten-free", "low-carb"],
    servings: 3-10,
    description: "I roast fowl, whether chicken or turkey, using basically the same approach, with the only " +
        "difference coming down to timing. Whenever possible, it better to roast longer and at a lower " +
        "temperature. However, you can speed things up by raising the temperature, but at the cost of the meat " +
        "being a little less tender, and a little less evenly cooked. However, this recipe guarantees a surberbly " +
        "rich and moist roast fowl.",
    steps: [{
        ingredients: [
            { amount: 1, unit: "stalk", item: "celery" },
            { amount: 1, item: "onion (chopped)" },
            { amount: 10, unit: "leaves", item: "basil" },
            { amount: 5, unit: "stems", item: "rosemary" },
        ],
        directions: "Chop the vegetables roughly, placing them in a large roasting pan. Add enough water to fill " +
            "pan about 1” deep. Clean the bird, removing the visera, crop, etc. and place on a rack in the pan. " +
            "This should leave a small gap between the bottom of the bird and the top of the water."
    }, {
        ingredients: [
            { amount: 1, item: "fowl" },
            { amount: 2, unit: "tbsp", item: "olive oil" },
        ],
        directions: "Clean the bird, removing the visera, crop, etc. and place on a rack in the pan.  This should " +
            "leave a small gap between the bottom of the bird and the top of the water. Using a basting brush, " +
            "paint the top of the bird and cover with alumninum foil to make a tent which completely encloses the " +
            "bird."
    }, {
        directions: "Roast in the oven (convection, if possible) at 300°F in order to cook at about 20 min/lb. If " +
            "you have more time, lower the temperature (min. of 200°F), if you have less time, raise the " +
            "temperature (max. of 350°F). Using a meat thermometer, check the temperature of the bird about " +
            "every 30 min. When the bird reaches a temperature of 160°F, remove the foil cover, and use a basting " +
            "brush to wet the turkey all over. Set aside 6 cups of the liquid from the roasting pan—avoiding any " +
            "solids. Continue to roast until the bird has reached 170°F."
    }, {
        ingredients: [
            { amount: 1, unit: "tbsp", item: "corn starch" }
        ],
        directions: "While the bird finishes cooking, add the reserved liquid to a large saucepan on high heat. " +
            "Add the corn starch to a small dish of cold water until completely mixed, and then gradually add the " +
            "mixture to the saucepan, stirring constantly. Continue to cook on high, stirring constantly, until the " +
            "gravy has the consistency of honey."
    }],
    credit: {
        name: "Andrew Miner"
    }
})
