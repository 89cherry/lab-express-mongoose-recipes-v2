const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },

        instructions: {
            type: String,
            required: true,

        },
        level: {
            type: String,
            enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
        },
        ingredients: {
            type: [String]

        },
        image: {
            type: String,
            default: "https://images.media-allrecipes.com/images/75131.jpg"
        },
        duration: {
            type: Number
        },
        isArchived: {
            type: Boolean,
            default: false
        }
    },

    {
        timestamps: true
    }


)

const Recipe = model("Recipe", RecipeSchema)

module.exports = Recipe