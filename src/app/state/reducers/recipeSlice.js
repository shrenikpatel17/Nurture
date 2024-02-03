"use client";

import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  activeRecipes: [],
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setFilteredData: (state, action) => {
        state.filteredData = action.payload
    },
    // addRecipe: (state, action) => {
    //     let recipes = state.weekRecipes
    //     if(!Object.keys(recipes).includes(action.payload)){
    //         recipes[action.payload] = {nutrient: []}
    //     }
    //     state.weekRecipes = recipes
    // },
    setActiveRecipes: (state, action) => {
        state.activeRecipes = action.payload
    }

  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice.reducer;