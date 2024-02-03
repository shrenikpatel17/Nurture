"use client";

import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  filteredData: {},
  activeIngredients: {},
};

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {
    setFilteredData: (state, action) => {
        state.filteredData = action.payload
    },
    addIngredient: (state, action) => {
        let ingredients = state.activeIngredients
        if(!Object.keys(ingredients).includes(action.payload)){
            ingredients[action.payload] = {nutrient: []}
        }
        state.activeIngredients = ingredients
    },
    setActiveIngredients: (state, action) => {
        state.activeIngredients = action.payload
    }

  },
});

export const ingredientActions = ingredientSlice.actions;

export default ingredientSlice.reducer;