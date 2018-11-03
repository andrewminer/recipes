
module.exports = require("../helpers")({
    title: "BBQ Pork Ribs",
    timings: {
        prep: "20 min",
        cook: "2—2½ hours",
    },
    icons: ["gluten-free", "overnight"],
    servings: 6,
    description: "This receipe really depends upon the BBQ sauce you use to determine the outcome. I personally " +
        "prefer something a little smokey and sweet, but feel free to use whatever suites you best. To stay " +
        "gluten-free, just be sure to read the ingredients in your BBQ sauce as some use flour for thickening.",
    steps: [{
        ingredients: [
            { amount: 4, unit: "lbs", item: "pork ribs" },
            { amount: 3/4, unit: "cup", item: "light brown sugar" },
            { amount: 1, unit: "tbsp", item: "garlic powder" },
            { amount: 1, unit: "tbsp", item: "paprika" },
            { amount: 1, unit: "tsp", item: "hickory smoke salt" },
            { amount: 1, unit: "tsp", item: "red pepper flakes" },
        ],
        directions: "Cut the ribs into portions of 2-3 ribs each, and lay flat on a portion of aluminum foil large " +
            "enough to completely cover it.  Mix the sugar and spaces together and apply evenly to each portion. " +
            "when finished, place them all in the refrigerator overnight to marinade."
    }, {
        directions: "Preheat the oven to 300°F. Fill a large roasting pan with about ½\" of water and place the " +
            "meat packets on a rack above the level of the water. Place the whole thing in the oven and roast until " +
            "the meat starts to peel away from the bones (about 2—2½ hours)."
    }, {
        ingredients: [
            { amount: 2, unit: "cups", item: "BBQ sauce" },
        ],
        directions: "Open all the meat packets and place the meat on a cooking sheet. Brush each with a liberal " +
            "covering of BBQ sauce and then return to the oven on high broil until the sauce has just started to " +
            "sear (3-4 minutes)."
    }]
})
