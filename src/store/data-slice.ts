import { createSlice } from "@reduxjs/toolkit";
import { Filter } from "../data";

const initial = {
  currentFilter: Filter.All,
  countriesData: [],
  countryData: [],
};

const slice = createSlice({
  name: "data",
  initialState: initial,
  reducers: {
    changeFilter(state, action) {
      state.currentFilter = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
