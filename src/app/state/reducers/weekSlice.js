"use client";

import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  activeWeek: 0,
  activeNutrients: {}
};

export const weekSlice = createSlice({
  name: "week",
  initialState,
  reducers: {
    setActiveWeek: (state, action) => {
        state.activeWeek = action.payload
    },
    setActiveNutrients: (state, action) => {
        state.activeNutrients = action.payload
    },
  },
});

export const weekActions = weekSlice.actions;

export default weekSlice.reducer;