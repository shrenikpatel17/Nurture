import mongoose, { Document, model, Model, Schema } from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    ingredients: {
      type: Array,
      default: [],    
    },
    directions: {
      type: String,
      default: "",
    },
    calories: {
      type: String,
      default: "",
    },
    nutrients: {
      type: Array,
      default: [],
    },
    imagePath: {
        type: String,
        default: "",
      },
    userAffiliation: {
        type: String,
        default: "",
      },
    weekAffiliation: {
        type: String,
        default: "",
      },
  },
  { timestamps: true }
);

export const Recipe = mongoose.models.Recipe || model("Recipe", RecipeSchema);
export default Recipe;
