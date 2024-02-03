"use client";

import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  mode: "light",
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    weeksIntoPregnancy: 0,
    allergies: [],
    diet: "",
    favoriteRecipes: [],
    allWeeksNutrientInfo: {}
  },
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        courses: [],
      };
      state.token = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;