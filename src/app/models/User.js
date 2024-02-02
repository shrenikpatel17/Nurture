import mongoose, { Document, model, Model, Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name Required"],
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: [true, "Last Name Required"],
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: [true, "Email Name Required"],
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password Required"],
      min: 5,
    },
    weeksIntoPregnancy: {
        type: Number,
        required: [true, "Weeks into pregnancy required"],
      },
    allergies: {
      type: Array,
      default: [],
    },
    diet: {
        type: String,
        default: "",
      },
    favoriteRecipes: {
        type: Array,
        default: [],
    },

    allWeeksNutrientInfo: {
        type: Array,
        default: [],
        // [
        //     {
        //     //weekNumber: 0 = week 1
        //     addedIngredients: [],
        //     eatenRecipes: [],
        //     nutrientContent: {
        //         "name": .2,
        //         "name": .2,
        //     }
        //     },
        //     {
        //         //weekNumber: 0 = week 1
        //         addedIngredients: [],
        //         eatenRecipes: [],
        //         nutrientContent: {
        //             "name": .2,
        //             "name": .2,
        //         }
        //         },
        // ]
    }
  },
  { timestamps: true }
);

export const User = mongoose.models.User || model("User", UserSchema);
export default User;
