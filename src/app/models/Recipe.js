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
    nutrients: {
      type: Array,
      default: [],    
    },
    calories: {
      type: String,
      default: "",
    },
    imagePath: {
        type: String,
        default: "",
      },
  },
  { timestamps: true }
);

export const Recipe = mongoose.models.Recipe || model("Recipe", RecipeSchema);
export default Recipe;
