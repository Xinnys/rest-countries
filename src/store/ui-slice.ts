import { createSlice, createListenerMiddleware } from "@reduxjs/toolkit";
import { Theme } from "../models";

const initial = {
  theme: Theme.Dark,
  currentPage: 1,
  countriesOnPage: 12,
};

const slice = createSlice({
  name: "ui",
  initialState: initial,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    changeCountriesOnPage: (state, action) => {
      state.countriesOnPage = action.payload;
    },
  },
});

export const uiMiddleware = createListenerMiddleware();

export const { changeTheme, changeCurrentPage, changeCountriesOnPage } =
  slice.actions;

uiMiddleware.startListening({
  actionCreator: changeTheme,
  effect: async (action) => {
    localStorage.setItem("theme", action.payload);
  },
});

uiMiddleware.startListening({
  actionCreator: changeCountriesOnPage,
  effect: async (action) => {
    localStorage.setItem("countriesOnPage", action.payload);
  },
});

export default slice.reducer;
